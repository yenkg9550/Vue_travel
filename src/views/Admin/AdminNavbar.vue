<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-fixed-top navbar-dark bg-coffee">
      <div class="navbar-collapse collapse nav-content order-1">
        <ul class="nav navbar-nav">
          <button class="btn btn-danger btn-signout" @click.prevent="signout">登出</button>
        </ul>
      </div>
      <ul class="nav navbar-nav">
        <button class="navbar-toggler toggle-button"
        type="button" data-toggle="collapse"
        data-target=".nav-content" aria-expanded="false"
        aria-label="Toggle navigation" style="border: none;">
          <tasty-burger-button type="spin" :color="color" :activeColor="color" />
        </button>
      </ul>
      <div class="navbar-collapse collapse nav-content">
        <ul class="ml-auto nav navbar-nav">
          <li class="nav-order nav-item">
            <router-link class="nav-link" href="#" to="products" active>
              <i class="fas fa-dice-d6"></i>
              訂單管理
            </router-link>
          </li>
          <li class="nav-order nav-item">
            <router-link class="nav-link" href="＃" to="coupons">
              <i class="fas fa-money-bill-wave-alt"></i>
              優惠卷
            </router-link>
          </li>
          <li class="nav-order nav-item">
            <router-link class="nav-link" href="#" to="orders">
              <i class="fas fa-clipboard-list"></i>
              訂單列表
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { TastyBurgerButton } from 'vue-tasty-burgers';

export default {
  name: 'Layout',
  props: ['pages'],
  data() {
    return {
      color: 'white',
      activeColor: 'white',
    };
  },
  components: {
    TastyBurgerButton,
  },
  methods: {
    signout() {
      const api = `${process.env.VUE_APP_API}/logout`;
      const vm = this;
      vm.$http.post(api).then((response) => {
        if (response.data.success) {
          vm.$router.push('/login');
        }
      });
    },
  },
};
</script>
