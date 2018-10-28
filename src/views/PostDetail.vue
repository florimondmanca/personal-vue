<template>
    <div class="page" v-if="post">
        <header>
            <div id="meta">
                <div>
                    <label class="text-muted" v-if="post.published">
                        {{ post.published }}
                    </label>
                    <label class="text-muted" v-if="!post.published">
                        Drafted {{ post.created }}
                    </label>
                    <PostTagList id="tags" :tags="post.tags" v-if="post.tags.length > 0"/>
                </div>
                <!-- TODO
                <a mat-button *ngIf="canEdit" [routerLink]="['/a', post.pk, 'edit']" color="warn">
                    <mat-icon inline="true">edit</mat-icon>
                    Edit
                </a>
                -->
            </div>

            <h1 class="text-primary">
                {{ post.title }}
            </h1>

            <p class="text-muted" v-if="post.description">
                {{ post.description }}
            </p>
        </header>

        <!-- TODO
        <app-image *ngIf="post.imageUrl" [src]="post.imageUrl" [caption]="post.imageCaption"></app-image>
        -->

        <!-- TODO: markdown rendering -->
        <div v-html="renderedContent"></div>

        <!-- TODO
        <app-post-footer></app-post-footer>
        -->

        <!-- TODO
        <div class="nav">
            <app-post-nav id="previous" [relative]="post.previous" type="previous"></app-post-nav>
            <app-post-nav id="next" [relative]="post.next" type="next"></app-post-nav>
        </div>
        -->
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Post from '@/models/Post';
    import PostService from '@/services/PostService';
    import {Route} from 'vue-router';
    import markdown from '@/common/markdown';

    export default Vue.extend({
        name: 'PostDetail',
        data(): { post?: Post } {
            return {
                post: undefined,
            };
        },
        computed: {
            renderedContent() {
                return markdown.render(this.post.content);
            },
        },
        beforeRouteEnter(to: Route, from: Route, next) {
            PostService.retrieve(to.params['slug']).then((post) => {
                next((vm: Vue) => Vue.set(vm, 'post', post));
            });
        },
    });
</script>

<style lang="scss" scoped>
    @import '~@/styles/_media';

    .nav {
        margin-top: 2em;
        display: grid;
        grid-template-areas: "previous next";
        grid-template-columns: 1fr 1fr;
        grid-gap: 2em;
    }

    header {
        margin-bottom: 1em;
        @include media-xs {
            margin-top: 0;
            margin-bottom: 2em;
        }
    }

    #tags {
        &::before {
            content: '\2219';
        }
    }

    #previous {
        grid-area: previous;
        text-align: left;
    }

    #next {
        grid-area: next;
        text-align: right;
    }
</style>
