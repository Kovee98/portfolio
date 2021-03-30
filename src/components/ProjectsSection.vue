<template>
    <section class="section">
        <div class="container is-max-desktop">
            <h1 class="title">Projects</h1>

            <div
                v-for="project in projects"
                :key="project.id"
            >
                <div class="card has-shadow">
                    <div class="card-content">
                        <div class="media">
                            <div
                                v-if="project.logo"
                                class="media-left"
                            >
                                <figure
                                    class="image is-48x48"
                                    :style="project.style"
                                >
                                    <img :src="project.logo" >
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">{{project.name}}</p>
                                <p class="subtitle is-6">{{project.type}}</p>
                            </div>

                            <a
                                v-if="project.url"
                                :href="project.url"
                                target="blank"
                            >
                                <span class="icon">
                                    <i class="icon-link-ext-alt fa-lg has-text-gradient"></i>
                                </span>
                            </a>
                        </div>

                        <div class="content">
                            {{project.desc}}
                        </div>

                        <span
                            v-for="tag in project.tags"
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
        name: 'ProjectsSection',
        props: {
            projects: Array
        }
    });
</script>
