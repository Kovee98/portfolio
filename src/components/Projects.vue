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
                                v-if="project.icon"
                                class="media-left"
                            >
                                <figure
                                    class="image is-48x48"
                                    :style="project.style"
                                >
                                    <img :src="project.icon" >
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">{{project.name}}</p>
                                <p class="subtitle is-6">{{project.type}}</p>
                            </div>

                            <a
                                :href="project.link"
                                target="blank"
                                disabled
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
    import moduloLogo from '../assets/img/modulo.png';
    import couchmanLogo from '../assets/img/couchman.png';
    import hydraLogo from '../assets/img/hydra.png';
    import cuttyBuddyLogo from '../assets/img/cutty_buddy.png';
    import waffleGobbleLogo from '../assets/img/waffle_gobble.png';
    import selectalLogo from '../assets/img/selectal.png';
    import cometLogo from '../assets/img/comet.png';

    export default defineComponent({
        setup () {
            return {
                projects: [
                    {
                        name: 'modulo.css',
                        type: 'CSS Framework',
                        desc: 'A completely modular CSS framework.',
                        icon: moduloLogo,
                        link: 'https://modulo.kovalchik.cloud',
                        tags: ['CSS', 'Modular']
                    },
                    {
                        name: 'Couchman',
                        type: 'Web App',
                        desc: 'A multi-instance CouchDB manager with filtering, sorting, and a simple view system. Meant to be simple, intuitive, and persistent.',
                        icon: couchmanLogo,
                        link: '',
                        tags: ['Vue', 'CouchDB', 'Bootstrap-Vue', 'API']
                    },
                    {
                        name: 'BittyCSS',
                        type: 'CSS Framework',
                        desc: 'A very small CSS framework that works without classes. Who says prototypes have to be ugly?',
                        // icon: 'src/assets/img/bitty.png',
                        link: '',
                        tags: ['SCSS', 'CSS']
                    },
                    {
                        name: 'Hydra',
                        type: 'Desktop App',
                        desc: 'HTTP client for testing RESTful API endpoints.',
                        icon: hydraLogo,
                        link: '',
                        tags: ['Quasar', 'Vue', 'ElectronJS']
                    },
                    {
                        name: 'Cutty Buddy',
                        type: 'Mobile App',
                        desc: 'Woodworking app for calculating optimized cut lists from a list of required lengths of stock.',
                        icon: cuttyBuddyLogo,
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
                        icon: waffleGobbleLogo,
                        link: 'https://www.wafflegobble.com/',
                        tags: ['Unity', 'C#']
                    },
                    {
                        name: 'Selectal',
                        type: 'NPM Package',
                        desc: 'JavaScript library to assist in the styling of HTML select boxes. 0 dependencies.',
                        icon: selectalLogo,
                        link: 'https://www.selectal.org/',
                        tags: ['JavaScript', 'VanillaJS', '0-dependency']
                    },
                    {
                        name: 'Comet',
                        type: 'Desktop App',
                        desc: 'Git client for the everyday management of repositories.',
                        icon: cometLogo,
                        link: '',
                        tags: ['ElectronJS', 'HTML', 'CSS', 'SCSS', 'JavaScript']
                    }
                ]
            };
        }
    });
</script>
