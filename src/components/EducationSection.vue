<template>
    <section class="section mb-6">
        <div class="container is-max-desktop">
            <h1 class="title">Education</h1>

            <div
                v-for="school in schools"
                :key="school.id"
            >
                <div class="card has-shadow">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure
                                    class="image is-48x48 is-rounded"
                                    :style="school.style"
                                >
                                    <img
                                        :src="`https://firebasestorage.googleapis.com/v0/b/portfolio-675d3.appspot.com/o/${encodeURIComponent(school.logo)}?alt=media`"
                                        class="is-rounded"
                                    >
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">{{school.name}}</p>
                                <p class="subtitle is-6">{{school.major}}</p>
                            </div>
                            <time datetime="2016-1-1">{{school.date}}</time>
                        </div>

                        <span
                            v-for="course in school.courses"
                            :key="course.id"
                            class="tag is-light mr-2 mb-2"
                        >
                            {{course}}
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
        name: 'EducationSection',
        props: {
            schools: Array
        }
    });
</script>
