<template>
    <div id="app" class="has-background-light">
        <Header/>
        <Projects/>
        <Jobs/>
        <Education/>
        <Footer/>
    </div>
</template>

<script>
import Header from './components/Header.vue';
import Jobs from './components/Jobs.vue';
import Projects from './components/Projects.vue';
import Education from './components/Education.vue';
import Footer from './components/Footer.vue';

export default {
    name: 'app',
    components: {
        Header,
        Jobs,
        Projects,
        Education,
        Footer
    }
};
</script>

<style lang="scss">
    @import "./assets/main.scss";
    .card {
        margin-bottom: 20px;
    }
    .title {
        font-family: $family-monospace;
    }
</style>
