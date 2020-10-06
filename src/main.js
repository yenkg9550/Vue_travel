import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';
import 'font-awesome/scss/font-awesome.scss';
import './plugins/fontawesome';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

import VeeValidate from 'vee-validate';
import VueI18n from 'vue-i18n';
import zhTW from 'vee-validate/dist/locale/zh_TW';
import * as TastyBurgerButton from 'vue-tasty-burgers';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import App from './App.vue';
import router from './router';
import store from './store';
import './bus';
import currencyFilter from './filters/currency';
import dataFilter from './filters/date';

axios.defaults.withCredentials = true;
const VueScrollTo = require('vue-scrollto');

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueAxios, axios);
Vue.use(VueI18n);
Vue.use(TastyBurgerButton);
Vue.use(VueSweetalert2);

// scrollto設定
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 2500,
  easing: 'ease-in-out',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});

Vue.component('Loading', Loading);
Vue.use(VueAwesomeSwiper /* { default global options } */);
Vue.filter('currency', currencyFilter);
Vue.filter('date', dataFilter);

const i18n = new VueI18n({
  locale: 'zhTW',
});

// 驗證設定
Vue.use(VeeValidate, {
  events: 'input|blur',
  i18n,
  dictionary: {
    zhTW,
  },
});

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

// 加入驗證
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_API}/api/user/check`;
    axios.post(api).then((response) => {
      if (response.data.success) {
        next();
      } else {
        next({
          path: '/',
        });
      }
    });
  } else {
    next();
  }
});
