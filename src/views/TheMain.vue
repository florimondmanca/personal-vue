<template>
    <main>
        <TheNavBar/>
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

<style scoped>

</style>
