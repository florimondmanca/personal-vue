import Vue from 'vue';
import Router from 'vue-router';
import TheMain from './views/TheMain.vue';
import TheBlog from './views/TheBlog.vue';
import TheBlogHome from './views/TheBlogHome.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: TheMain,
            children: [
                {
                    path: '/',
                    component: TheBlog,
                    children: [
                        {
                            path: '/',
                            name: 'blog-home',
                            component: TheBlogHome,
                        },
                    ],
                },
            ],
        },
    ],
});
