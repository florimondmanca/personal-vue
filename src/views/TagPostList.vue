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
    import {Route} from 'vue-router';
    import Component from 'vue-class-component';
    import {Action, State} from 'vuex-class';
    import PostList from '@/components/PostList.vue';
    import {BlogState, Post} from '@/store/blog';
    import {LIST} from '@/store/blog/actions';

    @Component({
        name: 'TagPostList',
        components: {
            PostList,
        },
    })
    export default class TagPostList extends Vue {

        @State('blog') blog: BlogState;
        @Action(LIST, {namespace: 'blog'}) list: any;

        get tag(): string {
            return this.$route.params['tag'];
        }

        get posts(): Post[] {
            return this.blog ? this.blog.posts : [];
        }

        created() {
            this.list({tag: this.tag});
        }

        beforeRouteUpdate(to: Route, from, next) {
            this.list({tag: to.params['tag']}).then(() => next());
        }
    }
</script>

