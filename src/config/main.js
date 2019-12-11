import Vue from 'vue'
import App from '../App.vue'
import router from './router'
import store from '../store'
import VueRouter from 'vue-router'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import '../assets/css/app.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// require styles
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
    // 相对路径设置
    // axios.defaults.baseURL = 'http://127.0.0.1:5000'
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
    // Vue.use(VueAxios, axios)
Vue.use(VueRouter)

store.dispatch('auth/getToken')
Vue.prototype.$imageUrl = (imgName) => {
    return `https://longjietan-1300838300.cos.ap-chengdu.myqcloud.com/${imgName}`
}


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')