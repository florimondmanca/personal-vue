<template>
    <ul :class="{ 'inline': inline, 'stacked': !inline }">
        <li v-for="tag in tags" :key="tag">
            <router-link :to="{ name: 'tag-post-list', params: { tag } }" class="no-border">
                #{{ tag }}
            </router-link>
        </li>
    </ul>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('PostTagList', {
        props: {
            tags: {
                type: Array,
                required: true,
            },
            inline: {
                type: Boolean,
                default: true,
            },
        },
    });
</script>

<style lang="scss" scoped>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        li {
            margin: 0 .2em;
        }
        &.inline {
            display: inline-flex;
            flex-wrap: wrap;
        }
        &.stacked {
            display: flex;
            flex-flow: column;
        }
    }

</style>
