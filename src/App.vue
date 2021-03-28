<template>
    <div id="app" class="has-background-light">
        <Header/>
        <Projects :projects="projects"/>
        <Jobs :jobs="jobs"/>
        <Education :education="education"/>
        <Footer/>
    </div>
</template>

<script lang="ts">
    import { defineComponent, onBeforeMount, reactive } from 'vue';
    import Header from './components/Header.vue';
    import Jobs from './components/Jobs.vue';
    import Projects from './components/Projects.vue';
    import Education from './components/Education.vue';
    import Footer from './components/Footer.vue';

    export default defineComponent({
        name: 'app',
        components: {
            Header,
            Jobs,
            Projects,
            Education,
            Footer
        },
        setup () {
            let projects = reactive([]);
            let jobs = reactive([]);
            let education = reactive([]);

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
                            projects = docs.find((doc: any) => doc.id === 'projects').doc.items;
                            jobs = docs.find((doc: any) => doc.id === 'experience').doc.items;
                            education = docs.find((doc: any) => doc.id === 'education').doc.items;

                            console.log('projects:', projects);
                            console.log('jobs:', jobs);
                            console.log('education:', education);
                        }
                    });
            });

            return {
                projects,
                jobs,
                education
            };
        }
    });
</script>
