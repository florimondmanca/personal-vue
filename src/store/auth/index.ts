import {Module} from 'vuex';
import {AuthState} from './types';
import {RootState} from '../types';

export const state: AuthState = {
    isLoggedIn: false,
};

export const auth: Module<AuthState, RootState> = {
    namespaced: true,
    state,
    mutations: {},
    actions: {},
};
