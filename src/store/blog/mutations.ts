import {BlogState, Post} from '@/store/blog/types';
import {MutationTree} from 'vuex';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';

export const mutations: MutationTree<BlogState> = {
    [FETCH_POSTS]: (state: BlogState) => {
        state.pending = true;
    },
    [FETCH_POSTS_SUCCESS]: (state: BlogState, posts: Post[]) => {
        state.posts = posts;
    },
};
