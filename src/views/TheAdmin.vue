<template>
    <section class="pad-h-responsive">
        <h1>Admin</h1>
        <h2>Drafts</h2>
        <PostList :posts="posts"></PostList>
    </section>
</template>

<script lang="ts">
    import Vue from 'vue';
    import PostList from '@/components/PostList.vue';
    import Component from 'vue-class-component';
    import {Action, State} from 'vuex-class';
    import {LIST} from '../store/blog/actions';
    import {BlogState, Post} from '../store/blog';

    @Component({
        name: 'TheAdmin',
        components: {
            PostList,
        },
    })
    export default class TheAdmin extends Vue {

        @State('blog') blog: BlogState;
        @Action(LIST, {namespace: 'blog'}) list: any;

        get posts(): Post[] {
            return this.blog ? this.blog.posts : [];
        }

        created() {
            this.list({draft: true});
        }
    }
</script>

<style lang="scss" scoped>

</style>
