<template>
    <section class="section">
        <div class="container is-max-desktop">
            <h1 class="title">Experience</h1>

            <div
                v-for="job in jobs"
                :key="job.id"
            >
                <div class="card has-shadow">
                    <div class="card-content">
                        <div class="media">
                            <div
                                v-if="job.icon"
                                class="media-left"
                            >
                                <figure
                                    class="image is-48x48"
                                    :style="job.style"
                                >
                                    <img
                                        :src="job.icon"
                                        class="is-rounded"
                                    >
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">{{job.company}}</p>
                                <p class="subtitle is-6">{{job.title}}</p>
                            </div>
                            <time>{{job.start}} - {{job.end}}</time>
                        </div>

                        <div class="content">
                            {{job.desc}}
                        </div>

                        <span
                            v-for="tag in job.tags"
                            :key="tag.id"
                            class="tag is-light mr-2 mb-2"
                        >
                            {{tag.toLowerCase()}}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import averittLogo from '../assets/img/averitt.png';

    export default defineComponent({
        setup () {
            return {
                jobs: [
                    {
                        company: 'Averitt Express',
                        title: 'Full Stack Software Engineer (In-office and remote)',
                        desc: 'Worked in an agile software development team building RESTful API’s, an offline-first mobile app with web technologies for drivers to carry out their day-to-day field operations, setting up devops and automation configurations, and working on the front and backends of customer and employee websites.',
                        start: 'Jan 2019',
                        end: 'Present',
                        icon: averittLogo,
                        tags: ['REST', 'API', 'Javascript', 'CouchDB', 'PouchDB', 'ExpressJS', 'Cordova', 'RiotJS', 'Java', 'Spring MVC', 'Spring Boot', 'JSP', 'SQL', 'HTML', 'CSS']
                    },
                    {
                        company: 'Elder Dragon Games',
                        title: 'Web Developer (Remote)',
                        desc: 'Designed, improved, and programmed web applications for an independent startup company.',
                        start: 'Sept 2017',
                        end: 'Dec 2018',
                        tags: ['HTML', 'CSS', 'JavaScript', 'Java', 'WordPress']
                    }
                ]
            };
        }
    });
</script>
