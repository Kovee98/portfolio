<template>
    <footer class="footer">
        <div class="content has-text-centered has-text-light">
            <div class="is-flex is-flex-wrap-nowrap is-justify-content-center">
                <div class="is-flex is-flex-direction-column is-justify-content-center">
                    <p class="mb-4">kovee98@gmail.com</p>
                    <p class="mb-4">jlkovalchik@gmail.com</p>
                    <p class="mb-4">Cookeville, TN</p>
                </div>
                <div class="is-flex is-flex-direction-column is-justify-content-center ml-6">
                    <span class="social mb-3">
                        <img src="../assets/img/github_light.png"  class="image is-32x32">
                        <a href="https://github.com/jkovalchik" target="blank" class="has-text-white is-floating-label">Work</a>
                        <span>/</span>
                        <a href="https://github.com/kovee98" target="blank" class="has-text-white">Personal</a>
                    </span>

                    <span class="social mb-3">
                        <img src="../assets/img/stack_overflow.svg"  class="image is-32x32 whiteify">
                        <a href="https://stackoverflow.com/users/8320548/joshuak98" target="blank" class="has-text-white">Stack Overflow</a>
                    </span>

                    <span class="social mb-3">
                        <img src="../assets/img/linkedin.png"  class="image is-32x32 whiteify">
                        <a href="https://www.linkedin.com/in/joshua-kovalchik-9180a112a" target="blank" class="has-text-white">LinkedIn</a>
                    </span>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    .footer {
        padding-bottom: 3rem;
    }

    .whiteify {
        filter: brightness(0) invert(1);
    }

    .social {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;

        > * {
            margin-right: 16px;
        }
    }
</style>
