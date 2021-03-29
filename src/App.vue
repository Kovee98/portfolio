<template>
    <div id="app" class="has-background-light">
        <Header/>
        <ProjectsSection :projects="projects"/>
        <Jobs :jobs="jobs"/>
        <Education :education="education"/>
        <Footer/>
    </div>
</template>

<script lang="ts">
    import { defineComponent, onBeforeMount, reactive } from 'vue';
    import Header from './components/Header.vue';
    import Jobs from './components/Jobs.vue';
    import ProjectsSection from './components/ProjectsSection.vue';
    import Education from './components/Education.vue';
    import Footer from './components/Footer.vue';

    export default defineComponent({
        name: 'app',
        components: {
            Header,
            Jobs,
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
