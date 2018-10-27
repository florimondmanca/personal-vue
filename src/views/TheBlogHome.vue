<template>
    <div>
        <h1>Latest posts</h1>
        <PostList :posts="posts"/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Route} from 'vue-router';
    import PostService from '@/services/PostService';
    import PostList from '@/components/PostList.vue';
    import Post from '@/common/post';

    export default Vue.extend({
        name: 'TheBlogHome',
        components: {
            PostList,
        },
        data() {
            return {
                posts: [] as Post[],
            };
        },
        beforeRouteEnter(to: Route, from: Route, next) {
            PostService.list().then((posts: Post[]) => {
                next((vm: Vue) => Vue.set(vm, 'posts', posts));
            });
        },
    });
</script>

<style scoped>

</style>