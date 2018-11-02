import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex';
import {RootState} from './types';
import {auth} from '@/store/auth';
import {blog} from '@/store/blog';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    state: {
        version: '1.0.0',
    },
    modules: {
        auth,
        blog,
    },
};

export default new Vuex.Store<RootState>(store);
