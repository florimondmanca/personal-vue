<template>
    <main>
        <div id="nav-container">
            <TheNavBar/>
        </div>
        <router-view/>
        <TheFooter/>
    </main>
</template>

<script lang="ts">
    import Vue from 'vue';
    import TheNavBar from '@/components/TheNavBar.vue';
    import TheFooter from '@/components/TheFooter.vue';

    export default Vue.extend({
        name: 'Main',
        components: {
            TheNavBar,
            TheFooter,
        },
    });
</script>

<style scoped lang="scss">
    #nav-container {
        position: sticky;
        top: 0;
        width: 100%;
        z-index: 2; // float on top of page content
    }
</style>
