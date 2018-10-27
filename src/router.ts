import Vue from 'vue';
import Router from 'vue-router';
import TheMain from './views/TheMain.vue';
import TheBlog from './views/TheBlog.vue';
import TheBlogHome from './views/TheBlogHome.vue';
import TagPostList from './views/TagPostList.vue';

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
                            name: 'home',
                            component: TheBlogHome,
                        },
                        {
                            path: '/t/:tag',
                            name: 'tag-post-list',
                            component: TagPostList,
                        },
                    ],
                },
            ],
        },
    ],
});
