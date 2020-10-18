<template>
    <div id="app" class="has-background-light">
        <Header/>
        <Projects/>
        <Jobs/>
        <Education/>
        <Footer/>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import Header from './components/Header.vue';
    import Jobs from './components/Jobs.vue';
    import Projects from './components/Projects.vue';
    import Education from './components/Education.vue';
    import Footer from './components/Footer.vue';

    export default defineComponent({
        name: 'app',
        components: {
            Header,
            Jobs,
            Projects,
            Education,
            Footer
        }
    });
</script>
