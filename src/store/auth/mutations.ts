import {MutationTree} from 'vuex';
import {Authorization} from '@/common/http';
import {AuthState, storedToken, User} from './types';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const SET_USER = 'SET_USER';
export const SET_TOKEN = 'SET_TOKEN';

export const mutations: MutationTree<AuthState> = {
    [LOGIN_START]: (state) => {
        state.pending = true;
    },
    [SET_TOKEN]: (state, token: string) => {
        storedToken.set(token);
        Authorization.set(token);
    },
    [SET_USER]: (state, user: User) => {
        state.user = user;
    },
    [LOGIN_SUCCESS]: (state) => {
        state.pending = false;
        state.isLoggedIn = true;
    },
    [LOGOUT]: (state) => {
        storedToken.remove();
        Authorization.unset();
        state.user = undefined;
        state.isLoggedIn = false;
    },
};
