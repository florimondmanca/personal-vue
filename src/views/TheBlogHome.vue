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
        created() {
            PostService.list().then((posts) => this.posts = posts);
        },
    });
</script>

<style scoped>

</style>