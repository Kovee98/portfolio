<template>
    <div id="app" class="has-background-light">
        <Header/>
        <ProjectsSection :projects="projects"/>
        <ExperienceSection :jobs="jobs"/>
        <Education :education="education"/>
        <Footer/>
    </div>
</template>

<script lang="ts">
    import { defineComponent, onBeforeMount, reactive } from 'vue';
    import Header from './components/Header.vue';
    import ExperienceSection from './components/ExperienceSection.vue';
    import ProjectsSection from './components/ProjectsSection.vue';
    import Education from './components/Education.vue';
    import Footer from './components/Footer.vue';

    export default defineComponent({
        name: 'app',
        components: {
            Header,
            ExperienceSection,
            ProjectsSection,
            Education,
            Footer
        },
        setup () {
            const state = reactive({
                projects: [],
                jobs: [],
                education: []
            });

            onBeforeMount(() => {
                const auth = btoa('portfolio:QbS7t3xFaz4Xi3');

                fetch('http://couchdb.kovalchik.cloud/portfolio/_all_docs?include_docs=true', {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Basic ${auth}`
                    }
                })
                    .then((res) => res.json())
                    .then((res) => res.rows)
                    .then((docs) => {
                        if (docs) {
                            state.projects = docs.find((doc: any) => doc.id === 'projects').doc.items;
                            state.jobs = docs.find((doc: any) => doc.id === 'experience').doc.items;
                            state.education = docs.find((doc: any) => doc.id === 'education').doc.items;
                        }
                    });
            });

            return state;
        }
    });
</script>
