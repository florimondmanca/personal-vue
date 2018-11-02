<template>
    <div>
        <h1>Latest posts</h1>
        <PostList :posts="posts"/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {Action, State} from 'vuex-class';
    import {BlogState, Post} from '@/store/blog';
    import {LIST} from '@/store/blog/actions';
    import PostList from '@/components/PostList.vue';
    const namespace = 'blog';

    @Component({
        name: 'TheBlogHome',
        components: {
            PostList,
        },
    })
    export default class TheBlogHome extends Vue {

        @State('blog') blog: BlogState;
        @Action(LIST, {namespace}) list: any;

        get posts(): Post[] {
            return this.blog && this.blog.posts || [];
        }

        created() {
            this.list();
        }
    }
</script>

<style scoped>

</style>