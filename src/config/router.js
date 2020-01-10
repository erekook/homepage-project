import store from '../store'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/auth/Login.vue'
import Register from '../pages/auth/Register.vue'
import LovePhotos from '../pages/xing/LovePhotos.vue'
import LoveSwiper from '../pages/xing/LoveSwiper.vue'
import HappyBirthday from '../pages/xing/HappyBirthday.vue'
import LoveStory from '../pages/xing/LoveStory.vue'
import Blog from '../pages/blog/Blog.vue'
import BlogDetail from '../pages/blog/BlogDetail.vue'
import BlogList from '../pages/blog/BlogList.vue'
import BlogNew from '../pages/blog/BlogNew.vue'



const router = new VueRouter({
    mode: 'history',
    // base: 'test',
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/login', name: Login.name, component: Login, meta: { noAuth: true } },
        { path: '/register', name: Register.name, component: Register, meta: { noAuth: true } },
        // about xing
        { path: '/xing/photos', name: LovePhotos.name, component: LovePhotos },
        { path: '/xing/swiper', name: LoveSwiper.name, component: LoveSwiper },
        { path: '/xing/happy-birthday', name: HappyBirthday.name, component: HappyBirthday },
        { path: '/xing/love-story', name: LoveStory.name, component: LoveStory },
        // about blog
        {
            path: '/blog',
            name: Blog.name,
            component: Blog,
            children: [
                { path: ':page', name: BlogList.name, component: BlogList },
                { path: 'blog-new', name: BlogNew.name, component: BlogNew },
                { path: 'blog-detail/:id', name: BlogDetail.name, component: BlogDetail },
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    // auth模块加了namespaced属性，所有store.getters.isLogin是访问不到的
    if (store.getters['auth/isLogin'] || to.matched.some(record => record.meta.noAuth)) {
        next()
    } else {
        next({
            name: Login.name,
            query: { redirect: to.fullPath }
        })
    }
})

export default router