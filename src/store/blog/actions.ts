import {ActionTree} from 'vuex';
import http from '@/common/http';
import querystring from '@/common/querystring';
import {PostSerializer} from './serializers';
import {BlogState} from './types';
import {RootState} from '../types';
import {FETCH, FETCH_POST_SUCCESS, FETCH_POSTS_SUCCESS} from './mutations';

export const LIST = 'LIST';
export const RETRIEVE = 'RETRIEVE';

interface FetchPostsOptions {
    draft?: boolean;
    tag?: string;
}

export const actions: ActionTree<BlogState, RootState> = {
    async [LIST]({commit}, options: FetchPostsOptions = {}) {
        commit(FETCH);
        const params: any = {
            draft: options.draft ? '2' : '3',
        };
        if (options.tag) {
            params.tag = options.tag;
        }
        const res = await http.get('posts' + querystring.stringify(params));
        commit(FETCH_POSTS_SUCCESS, res.data.results.map(PostSerializer.parse));
    },
    async [RETRIEVE]({commit}, slug: string) {
        commit(FETCH);
        const res = await http.get(`posts/${slug}`);
        commit(FETCH_POST_SUCCESS, PostSerializer.parse(res.data));
    },
};
