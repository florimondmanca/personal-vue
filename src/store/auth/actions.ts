import {ActionTree} from 'vuex';
import http from '@/common/http';
import {RootState} from '../types';
import {AuthState, UserSerializer} from './types';
import {LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS, LOGOUT, SET_TOKEN, SET_USER} from '@/store/auth/mutations';

export const LOGIN = 'LOGIN';
export const FETCH_PROFILE = 'FETCH_PROFILE';

interface LoginOptions {
    username: string;
    password: string;
}

export const actions: ActionTree<AuthState, RootState> = {
    async [LOGIN]({commit, dispatch}, options: LoginOptions) {
        commit(LOGIN_START);
        try {
            const res = await http.post(`auth/token`, options);
            const token: string = res.data.token;
            commit(SET_TOKEN, token);
            await dispatch(FETCH_PROFILE);
            commit(LOGIN_SUCCESS);
        } catch {
            commit(LOGIN_FAILED);
        }
    },
    async [FETCH_PROFILE]({commit}) {
        const res = await http.get(`auth/profile`);
        const user = UserSerializer.parse(res.data);
        commit(SET_USER, user);
    },
    async [LOGOUT]({commit}) {
        commit(LOGOUT);
    },
};
