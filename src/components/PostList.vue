<template>
    <ul>
        <li class="post" v-for="post in posts" :key="post.slug">
            <div class="post-header">
                <label class="text-muted" v-if="post.published">
                    {{ post.published }}
                </label>
                <PostTagList
                    class="tag-list"
                    :class="{ separated: post.published }"
                    :tags="post.tags"
                    v-if="post.tags.length > 0"/>
            </div>

            <h3>
                <!-- TODO add link to post detail -->
                <router-link to="home" @click="scrollTop">
                    {{ post.title }}
                </router-link>
            </h3>

            <p>
                {{ post.description }}
            </p>
        </li>
        <li class="text-center" v-if="posts.length === 0">
            No blog posts here yet. Stay tuned!
        </li>
    </ul>
</template>

<script lang="ts">
    import Vue, {PropOptions} from 'vue';
    import Post from 'src/common/post';
    import PostTagList from './PostTagList.vue';

    export default Vue.component('PostList', {
        components: {
            PostTagList,
        },
        props: {
            posts: {
                type: Array,
                required: true,
            } as PropOptions<Post[]>,
        },
        methods: {
            scrollTop() {
                // TODO
            },
        },
    });
</script>

<style lang="scss" scoped>
    @import '~@/styles/_media.scss';

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .post {
        padding-bottom: 1em;
        & + .post {
            border-top: 1px solid lightgray;
            padding-top: 1em;
        }
    }

    .post-header {
        font-size: smaller;
        margin-bottom: .25em;
        @include media-xs {
            margin-bottom: 0;
            font-size: inherit;
        }
    }

    .published-date {
        margin: 0;
    }

    .tag-list {
        &.separated::before {
            content: '\2219';
        }
    }
</style>