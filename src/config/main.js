import Vue from 'vue'
import App from '../App.vue'
import router from './router'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '../assets/css/app.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
    // 相对路径设置
axios.defaults.baseURL = 'http://127.0.0.1:5000'
Vue.use(VueAwesomeSwiper)
Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.prototype.$imageUrl = (imgName) => {
    return `https://longjietan-1300838300.cos.ap-chengdu.myqcloud.com/${imgName}`
}
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')