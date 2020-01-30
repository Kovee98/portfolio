<template>
    <section class="section">
        <div class="container">
            <h1 class="title">Projects</h1>

            <div v-for="project in projects" :key="project.id">
                <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48 is-rounded" :style="project.style">
                                    <img :src="project.icon" class="is-rounded">
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">{{project.name}}</p>
                                <p class="subtitle is-6">{{project.type}}</p>
                            </div>
                            <a v-if="project.link" :href="project.link " target="blank">
                                <b-icon size="is-small" icon="external-link-alt"/>
                            </a>
                        </div>
                        <div class="content">
                            {{project.desc}}
                        </div>
                        <span v-for="tag in project.tags" :key="tag.id" class="tech has-text-primary">#{{tag.toLowerCase()}}</span>
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
            projects: [
                {
                    name: 'Hydra',
                    type: 'Desktop App',
                    desc: 'An HTTP client for sending requests and receiving responses.',
                    icon: require('../assets/img/hydra.png'),
                    link: '',
                    tags: ['Quasar', 'Vue', 'ElectronJS']
                },
                {
                    name: 'Cutty Buddy',
                    type: 'Mobile App',
                    desc: 'A simple woodworking mobile app for calculating optomized cut lists from a list of required lengths of stock.',
                    icon: require('../assets/img/cutty_buddy.png'),
                    link: '',
                    style: {
                        backgroundColor: '#ff8800',
                        img: {
                            width: '75%'
                        }
                    },
                    tags: ['Cordova', 'Quasar', 'Vue', 'JavaScript', 'HTML', 'CSS']
                },
                {
                    name: 'Waffle Gobble',
                    type: 'Mobile Game',
                    desc: 'A game where you eat waffles that get launched into the air and you have to eat as many as you can by tapping on them.',
                    icon: require('../assets/img/waffle_gobble.png'),
                    link: 'https://www.wafflegobble.com/',
                    tags: ['Unity', 'C#']
                },
                {
                    name: 'Selectal',
                    type: 'NPM Package',
                    desc: 'A small JS library to help in the styling of html select boxes.',
                    icon: require('../assets/img/selectal.png'),
                    link: 'https://www.selectal.org/',
                    tags: ['JavaScript']
                },
                {
                    name: 'Comet',
                    type: 'Desktop App',
                    desc: 'A visual Git client.',
                    icon: require('../assets/img/comet.png'),
                    link: '',
                    tags: ['ElectronJS', 'HTML', 'CSS', 'SCSS', 'JavaScript']
                }
            ]
        };
    }
};
</script>

<style lang="scss">
    .tech {
        margin-right: 10px;
    }
</style>
