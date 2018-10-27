<template>
    <nav>
        <ul>
            <li>
                <h1 id="title">
                    <router-link to="/">
                        <span id="brand-long">CodeSail</span>
                        <span id="brand-short">CS</span>
                    </router-link>
                </h1>
            </li>
            <li>
                <input type="search" placeholder="Search">
            </li>
            <li>
                <button type="button">
                    ...
                </button>
            </li>
        </ul>
    </nav>
</template>

<script>
    import Vue from 'vue';

    export default Vue.component('TheNavBar', {});
</script>

<style scoped>

</style>