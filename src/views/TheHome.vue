<template>
    <div>
        <h1>Latest posts</h1>
        <PostList :posts="posts"/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import PostList from '@/components/PostList.vue';
    import PostService from '@/services/PostService';

    export default Vue.extend({
        name: 'TheHome',
        components: {
            PostList,
        },
        data() {
            return {
                posts: [],
            };
        },
        methods: {
            async getPosts() {
                this.posts = await PostService.list();
            },
        },
        created() {
            this.getPosts();
        },
    });
</script>
