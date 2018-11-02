export * from './types';
export * from './serializers';
import {Module} from 'vuex';
import {BlogState} from './types';
import {RootState} from '../types';

export const state: BlogState = {
    posts: [],
};

export const blog: Module<BlogState, RootState> = {
    namespaced: true,
    state,
    mutations: {},
    actions: {},
};
