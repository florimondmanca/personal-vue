<template>
    <ul>
        <li v-for="post in posts" :key="post.slug">
            {{ post.title }}
        </li>
    </ul>
</template>

<script lang="ts">
    import Vue, {PropOptions} from 'vue';
    import Post from 'src/common/post';

    export default Vue.component('PostList', {
        props: {
            posts: {
                type: Array,
                required: true,
            } as PropOptions<Post[]>,
        },
    });
</script>
