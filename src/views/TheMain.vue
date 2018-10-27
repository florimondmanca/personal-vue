<template>
    <main>
        <TheNavBar/>
        <router-view/>
        <TheFooter/>
    </main>
</template>

<script>
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

<style scoped>

</style>
