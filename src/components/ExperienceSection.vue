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
                                v-if="job.logo"
                                class="media-left"
                            >
                                <figure
                                    class="image is-48x48"
                                    :style="job.style"
                                >
                                    <img
                                        :src="`https://firebasestorage.googleapis.com/v0/b/portfolio-675d3.appspot.com/o/${encodeURIComponent(job.logo)}?alt=media`"
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

    export default defineComponent({
        name: 'ExperienceSection',
        props: {
            jobs: Array
        }
    });
</script>
