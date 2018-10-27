<template>
    <nav>
        <ul>
            <li>
                <h1>
                    <router-link to="/">
                        <span id="brand-long">CodeSail</span>
                        <span id="brand-short">CS</span>
                    </router-link>
                </h1>
            </li>
            <li>
                <input type="search" class="full-width" placeholder="Search">
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

<style scoped lang="scss">
    nav {
        padding-top: .5em;
        background: white;
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: grid;
            grid-template-columns: auto 1fr auto;
            grid-gap: 1em;
            align-items: center;
        }
    }

    h1 {
        font-size: 0.65 * $font-size-h1;
        width: fit-content;
        margin: auto .6em .1em auto;
    }

    #brand-long {
        display: inline-block;
    }

    #brand-short {
        display: none;
    }
</style>