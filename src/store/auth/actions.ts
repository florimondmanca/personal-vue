import {ActionTree} from 'vuex';
import http from '@/common/http';
import {RootState} from '../types';
import {AuthState, UserSerializer} from './types';
import {LOGIN_START, LOGIN_SUCCESS, LOGOUT, SET_TOKEN, SET_USER} from '@/store/auth/mutations';

export const LOGIN = 'LOGIN';

interface LoginOptions {
    username: string;
    password: string;
}

export const actions: ActionTree<AuthState, RootState> = {
    async [LOGIN]({commit, dispatch}, options: LoginOptions) {
        commit(LOGIN_START);
        const res = await http.post(`login/`, options);
        const token = res.data.token;
        const user = UserSerializer.parse(res.data.user);
        commit(SET_TOKEN, token);
        commit(SET_USER, user);
        commit(LOGIN_SUCCESS);
    },
    async [LOGOUT]({commit}) {
        commit(LOGOUT);
    },
};
