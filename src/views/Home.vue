<template>
    <div>
        <h1>Latest posts</h1>
        <post-list :posts="posts"></post-list>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import PostList from '@/components/PostList.vue';
    import PostService from '@/services/post.service';

    export default Vue.extend({
        name: 'home',
        components: {
            PostList,
        },
        data() {
            return {
                posts: [],
            };
        },
        methods: {
            getPosts() {
                PostService.list()
                    .then((posts) => this.posts = posts);
            },
        },
        created() {
            this.getPosts();
        },
    });
</script>
