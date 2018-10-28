<template>
    <div class="page pad-h-sm">
        <h2 class="text-center">
            #{{ tag }}
        </h2>
        <PostList :posts="posts"></PostList>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import PostService from '@/services/PostService';
    import PostList from '@/components/PostList.vue';
    import Post from '@/models/Post';
    import {Route} from 'vue-router';

    export default Vue.extend({
        name: 'TagPostList',
        components: {
            PostList,
        },
        props: {
            tag: {
                type: String,
                required: true,
            },
        },
        data() {
            return {
                posts: [] as Post[],
            };
        },
        beforeRouteEnter(to: Route, from: Route, next) {
            PostService.list({ tag: to.params['tag'] }).then((posts: Post[]) => {
                next((vm: Vue) => Vue.set(vm, 'posts', posts));
            });
        },
        beforeRouteUpdate(to, from, next) {
            PostService.list({ tag: to.params['tag'] }).then((posts: Post[]) => {
                this.posts = posts;
                next();
            });
        },
        methods: {
            getPosts() {
                PostService.list({tag: this.tag}).then((posts) => this.posts = posts);
            },
        },
    });
</script>

<style lang="scss" scoped>

</style>
