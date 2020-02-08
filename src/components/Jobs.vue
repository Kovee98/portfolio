<template>
    <section class="section">
        <div class="container">
            <h1 class="title">Experience</h1>

            <div v-for="job in jobs" :key="job.id">
                <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">{{job.company}}</p>
                                <p class="subtitle is-6">{{job.title}}</p>
                            </div>
                            <time>{{job.start}} - {{job.end}}</time>
                        </div>
                        <div class="content">
                            {{job.desc}}
                        </div>
                        <span v-for="tag in job.tags" :key="tag.id" class="tech has-text-primary">#{{tag.toLowerCase()}}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data () {
        return {
            jobs: [
                {
                    company: 'Averitt Express',
                    title: 'Full Stack Software Engineer',
                    desc: 'Worked in an agile software development team building RESTful API’s, working on the front and backends of customer and employee websites, setting up devops and automation configurations, and helped build a mobile app for truck drivers to manage their day-to-day field operations.',
                    start: 'Jan 2019',
                    end: 'Present',
                    tags: ['REST', 'API', 'Java', 'Spring MVC', 'Spring Boot', 'JSP', 'SQL', 'HTML', 'CSS', 'JavaScript', 'Cordova', 'RiotJS']
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
};
</script>
