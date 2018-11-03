export * from './types';
import {Module} from 'vuex';
import {AuthState, storedToken} from './types';
import {RootState} from '../types';
import {mutations} from './mutations';
import {actions} from './actions';


export const auth: Module<AuthState, RootState> = {
    namespaced: true,
    state: {
        user: undefined,
        isLoggedIn: storedToken.isSet(),
        pending: false,
        error: false,
    },
    mutations,
    actions,
};
