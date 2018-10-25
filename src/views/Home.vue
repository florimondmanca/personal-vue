<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <h1>Latest posts</h1>
        <post-list :posts="posts"></post-list>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import PostList from '@/components/PostList.vue';
    import http from '@/common/http';

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
                http.get('posts?draft=3')
                    .then(resp => resp.data)
                    .then(data => this.posts = data['results'])
                ;
            },
        },
        created() {
            this.getPosts();
        }
    });
</script>
