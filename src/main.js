
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/";


import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(VueAwesomeSwiper)
Vue.use(Vant)


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
