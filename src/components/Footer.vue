<template>
    <footer class="footer">
        <div class="content has-text-centered has-text-light">
            <div class="columns">
                <div class="column"/>
                <div class="column">
                    <p>jlkovalchik@gmail.com</p>
                    <p>Cookeville, TN</p>
                </div>
                <div class="column">
                    <span class="social">
                        <img :src="require('../assets/img/github_light.png')"  class="image is-32x32">
                        <a href="https://github.com/jkovalchik" target="blank" class="has-text-white is-floating-label">Work</a>
                        <span>/</span>
                        <a href="https://github.com/kovee98" target="blank" class="has-text-white">Personal</a>
                    </span>

                    <span class="social">
                        <img :src="require('../assets/img/stack_overflow.svg')"  class="image is-32x32 white">
                        <a href="https://stackoverflow.com/users/8320548/joshuak98" target="blank" class="has-text-white">Stack Overflow</a>
                    </span>

                    <span class="social">
                        <img :src="require('../assets/img/linkedin.png')"  class="image is-32x32 white">
                        <a href="https://www.linkedin.com/in/joshua-kovalchik-9180a112a" target="blank" class="has-text-white">LinkedIn</a>
                    </span>
                </div>
                <div class="column"/>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
    .white {
        filter: brightness(0) invert(1);
    }
    .social {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        margin-bottom: 16px;

        > * {
            margin-right: 16px;
        }
    }
</style>
