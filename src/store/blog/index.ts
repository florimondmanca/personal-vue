export * from './types';
export * from './serializers';
import {Module} from 'vuex';
import {BlogState} from './types';
import {RootState} from '../types';
import {mutations} from './mutations';
import {actions} from './actions';


export const blog: Module<BlogState, RootState> = {
    namespaced: true,
    state: {
        pending: false,
        posts: [],
        post: null,
    },
    mutations,
    actions,
};
