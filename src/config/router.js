import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import LovePhotos from '../pages/xing/LovePhotos.vue'
import LoveSwiper from '../pages/xing/LoveSwiper.vue'
import HappyBirthday from '../pages/xing/HappyBirthday.vue'




export default new VueRouter({
    mode: 'history',
    // base: 'test',
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/xing/photos', name: LovePhotos.name, component: LovePhotos },
        { path: '/xing/swiper', name: LoveSwiper.name, component: LoveSwiper },
        { path: '/xing/happy-birthday', name: HappyBirthday.name, component: HappyBirthday },
    ]
})