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
    import { CouchRow, Project, Job, School } from './types';

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
                const auth = btoa('portfolio:QbS7t3xFaz4Xi3');

                fetch('https://couchdb.kovalchik.cloud/portfolio/_all_docs?include_docs=true', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Basic ${auth}`
                    }
                })
                    .then((res) => res.json())
                    .then((res) => res.rows)
                    .then((docs) => {
                        if (docs) {
                            state.projects = docs.find((doc: CouchRow<Project>) => doc.id === 'projects').doc.items;
                            state.jobs = docs.find((doc: CouchRow<Job>) => doc.id === 'experience').doc.items;
                            state.schools = docs.find((doc: CouchRow<School>) => doc.id === 'education').doc.items;
                        }
                    });
            });

            return state;
        }
    });
</script>
