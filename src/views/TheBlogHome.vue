<template>
    <div>
        <h1>Latest posts</h1>
        <PostList :posts="posts"/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {Route} from 'vue-router';
    import {Post} from '@/store/blog';
    import PostService from '@/services/PostService';
    import PostList from '@/components/PostList.vue';

    @Component({
        name: 'TheBlogHome',
        components: {
            PostList,
        },
    })
    export default class TheBlogHome extends Vue {
        posts: Post[] = [];

        beforeRouteEnter(to: Route, from: Route, next) {
            PostService.list().then((posts: Post[]) => {
                next((vm: Vue) => Vue.set(vm, 'posts', posts));
            });
        }
    }
</script>

<style scoped>

</style>