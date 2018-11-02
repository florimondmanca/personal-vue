import {BlogState, Post} from '@/store/blog/types';
import {MutationTree} from 'vuex';

export const FETCH = 'FETCH';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';

export const mutations: MutationTree<BlogState> = {
    [FETCH]: (state) => {
        state.pending = true;
    },
    [FETCH_POSTS_SUCCESS]: (state, posts: Post[]) => {
        state.posts = posts;
        state.pending = false;
    },
    [FETCH_POST_SUCCESS]: (state, post: Post) => {
        state.post = post;
        state.pending = false;
    },
};
