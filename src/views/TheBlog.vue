<template>
    <section class="pad-h-responsive">
        <router-view/>
    </section>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: 'TheBlog',
    });
</script>
