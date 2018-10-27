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
    import Post from '@/common/post';

    export default Vue.extend({
        name: 'TagPostList',
        components: {
            PostList,
        },
        data() {
            return {
                posts: [] as Post[],
            };
        },
        computed: {
            tag(): string {
                return this.$route.params.tag;
            },
        },
        watch: {
            '$route.params.tag'() {
                this.getPosts();
            },
        },
        created() {
            this.getPosts();
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
