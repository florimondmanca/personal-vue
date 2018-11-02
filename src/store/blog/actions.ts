import {ActionTree} from 'vuex';
import http from '@/common/http';
import querystring from '@/common/querystring';
import {PostSerializer} from './serializers';
import {BlogState} from './types';
import {RootState} from '../types';
import {FETCH_POSTS, FETCH_POSTS_SUCCESS} from './mutations';

export const LIST = 'LIST';

interface FetchPostsOptions {
    draft?: boolean;
    tag?: string;
}

export const actions: ActionTree<BlogState, RootState> = {
    async [LIST]({commit}, options: FetchPostsOptions = {}) {
        commit(FETCH_POSTS);
        const params: any = {
            draft: options.draft ? '2' : '3',
        };
        if (options.tag) {
            params.tag = options.tag;
        }
        const res = await http.get('posts' + querystring.stringify(params));
        commit(FETCH_POSTS_SUCCESS, res.data.results.map(PostSerializer.parse));
    },
};
