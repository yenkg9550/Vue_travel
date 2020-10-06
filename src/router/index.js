// 官方元件
import Vue from 'vue';
import Router from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(Router);
Vue.use(VueAxios, axios);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      name: 'Front',
      component: () => import('../views/Front/Front.vue'),
    },
    {
      path: '/coupon',
      name: 'CouponGame',
      component: () => import('../views/Front/CouponGame.vue'),
    },
    {
      path: '/productlist',
      name: 'ProductList',
      component: () => import('../views/Front/ProductList.vue'),
    },
    {
      path: '/product/:detailId?',
      name: 'ProductDetail',
      component: () => import('../views/Front/ProductDetail.vue'),
    },
    {
      path: '/question',
      name: 'Question',
      component: () => import('../components/Question.vue'),
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/Front/Checkout.vue'),
    },
    { // 登入頁面
      path: '/login',
      name: 'Login',
      component: () => import('../views/Admin/Login.vue'),
    },
    { // 管理頁面
      path: '/admin',
      name: 'Dashboard',
      component: () => import('../views/Admin/Dashboard.vue'),
      children: [
        {
          path: 'products',
          name: 'Products',
          component: () => import('../views/Admin/Products.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'coupons',
          name: 'Coupons',
          component: () => import('../views/Admin/Coupons.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'orders',
          name: 'Orders',
          component: () => import('../views/Admin/Orders.vue'),
          meta: { requiresAuth: true },
        },
      ],
    },
  ],
});
