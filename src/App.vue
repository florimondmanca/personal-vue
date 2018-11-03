<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import '@/class-component-hooks';
    import {storedToken} from './store/auth';
    import {AuthorizationHeader} from './common/http';

    export default Vue.extend({
        name: 'App',
        beforeCreate() {
            if (storedToken.isSet()) {
                AuthorizationHeader.set(storedToken.get());
            }
        }
    });
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    html {
        min-height: 100%;
        padding: 0;
        margin: 0;
    }

    body {
        width: 100%;
        padding: 0;
        margin: 0;
    }

    pre {
        background: #f9f9f9;
        border: 1px solid #eee;
        border-radius: 3px;
        overflow: auto;
        padding: 1em;
        margin-bottom: 1em;
        & > code {
            font-size: 0.95em;
        }
    }

    code {
        font-family: 'Inconsolata', 'Courier', monospace;
    }

    .markdown-image {
        margin: 2em 0;
        img {
            display: block;
            max-width: 100%;
            margin: auto;
        }
        figcaption {
            padding-top: 1em;
            text-align: center;
            color: steelblue;
            font-style: italic;
            font-size: .9em;
        }
    }
</style>
