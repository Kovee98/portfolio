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
                        <b-tag v-for="tag in project.tags" type="is-grey" :key="tag.id" class="tech has-text-white">{{tag.toLowerCase()}}</b-tag>
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
                    name: 'Couchman',
                    type: 'Web App',
                    desc: 'A multi-instance CouchDB manager with filtering, sorting, and a simple view system. Meant to be simple, intuitive, and persistent.',
                    icon: require('../assets/img/couchman.png'),
                    link: '',
                    tags: ['Vue', 'CouchDB', 'Bootstrap-Vue', 'API']
                },
                {
                    name: 'BittyCSS',
                    type: 'CSS Framework',
                    desc: 'A very small CSS framework that works without classes. Who says prototypes have to be ugly?',
                    // icon: require('../assets/img/couchman.png'),
                    link: '',
                    tags: ['SCSS', 'CSS']
                },
                {
                    name: 'Hydra',
                    type: 'Desktop App',
                    desc: 'HTTP client for testing RESTful API endpoints.',
                    icon: require('../assets/img/hydra.png'),
                    link: '',
                    tags: ['Quasar', 'Vue', 'ElectronJS']
                },
                {
                    name: 'Cutty Buddy',
                    type: 'Mobile App',
                    desc: 'Woodworking app for calculating optimized cut lists from a list of required lengths of stock.',
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
                    desc: 'Single-click game where you tap to eat waffles launched into the air by a crazy toaster. Gobble up as many as you can before time runs out!',
                    icon: require('../assets/img/waffle_gobble.png'),
                    link: 'https://www.wafflegobble.com/',
                    tags: ['Unity', 'C#']
                },
                {
                    name: 'Selectal',
                    type: 'NPM Package',
                    desc: 'JavaScript library to assist in the styling of HTML select boxes. 0 dependencies.',
                    icon: require('../assets/img/selectal.png'),
                    link: 'https://www.selectal.org/',
                    tags: ['JavaScript', 'VanillaJS', '0-dependency']
                },
                {
                    name: 'Comet',
                    type: 'Desktop App',
                    desc: 'Git client for the everyday management of repositories.',
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
        font-size: 1.2rem;
    }
</style>
