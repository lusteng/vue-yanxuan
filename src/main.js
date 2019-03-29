

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/";


import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import { Toast, Lazyload, Rate, List,  } from 'vant'
import 'vant/lib/index.css' 

Vue.use(VueAwesomeSwiper)
  .use(Lazyload, {
      // loading: "http://yanxuan.nosdn.127.net/1769a954d4d5c7a6b25da57f15fc5a1d.png"
  })  
  .use(Rate)
  .use(List) 

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
