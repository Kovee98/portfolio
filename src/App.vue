<template>
    <div id="app" class="has-background-light">
        <HeaderSection/>
        <ProjectsSection :projects="projects"/>
        <ExperienceSection :jobs="jobs"/>
        <EducationSection :schools="schools"/>
        <FooterSection/>
    </div>
</template>

<script lang="ts">
    import { defineComponent, onBeforeMount, reactive } from 'vue';
    import HeaderSection from './components/HeaderSection.vue';
    import ExperienceSection from './components/ExperienceSection.vue';
    import ProjectsSection from './components/ProjectsSection.vue';
    import EducationSection from './components/EducationSection.vue';
    import FooterSection from './components/FooterSection.vue';
    import { initializeApp } from 'firebase/app';
    import { getAnalytics } from 'firebase/analytics';
    import {
        getFirestore,
        collection,
        getDocs
    } from 'firebase/firestore';

    export default defineComponent({
        name: 'app',
        components: {
            HeaderSection,
            ExperienceSection,
            ProjectsSection,
            EducationSection,
            FooterSection
        },
        setup () {
            const state = reactive({
                projects: [],
                jobs: [],
                schools: []
            });

            onBeforeMount(() => {
                const firebaseConfig = {
                    apiKey: 'AIzaSyAgrfueO0pJoCai5fL5-k6XCl_8Pf2NJu4',
                    authDomain: 'portfolio-675d3.firebaseapp.com',
                    projectId: 'portfolio-675d3',
                    storageBucket: 'portfolio-675d3.appspot.com',
                    messagingSenderId: '134415375633',
                    appId: '1:134415375633:web:e5e63d91ac81097b89c0b0',
                    measurementId: 'G-KL9NNF60F5'
                };

                const app = initializeApp(firebaseConfig);
                const analytics = getAnalytics(app);
                const firestore = getFirestore(app);

                getDocs(collection(firestore, 'projects'))
                    .then((snapshot) => snapshot.docs)
                    .then((docs) => docs.map((doc) => doc.data()))
                    .then((docs) => {
                        state.projects = docs;
                    });

                getDocs(collection(firestore, 'jobs'))
                    .then((snapshot) => snapshot.docs)
                    .then((docs) => docs.map((doc) => doc.data()))
                    .then((docs) => {
                        state.jobs = docs;
                    });

                getDocs(collection(firestore, 'schools'))
                    .then((snapshot) => snapshot.docs)
                    .then((docs) => docs.map((doc) => doc.data()))
                    .then((docs) => {
                        state.schools = docs;
                    });
            });

            return state;
        }
    });
</script>
