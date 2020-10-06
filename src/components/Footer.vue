<template>
  <div>
    <div class="footer-box mt-3">
      <div class="row text-center">
        <ul class="col-md-4 pt-4">
          <h4 class="mb-3 text-coffee text-bold">FiFi 愛旅遊</h4>
           <li><router-link to="/question" class="left-link">常見問題</router-link></li>
           <li><router-link to="/productlist" class="left-link">購買產品</router-link></li>
           <li><router-link to="/coupon" class="left-link">領取優惠卷</router-link></li>
        </ul>
        <ul class="col-md-4 pt-4">
          <h4 class="mb-3 text-coffee text-bold">聯絡我們</h4>
            <li class="text-coffee">電話:0912345678</li>
            <li class="text-coffee">信箱:FiFi@gmail.com</li>
            <li class="text-coffee">地址:嘉義市東區 </li>
        </ul>
        <ul class="col-md-4 pt-4 footer-icon">
          <h4 class="pb-2 text-coffee text-bold">追蹤我們</h4>
          <li>
            <a href="#" class="pr-2"><i class="fab fa-facebook fa-2x fa-color"></i></a>
            <a href="#"><i class="fab fa-instagram fa-2x fa-color"></i></a>
          </li>
          <li>
            <a href="#" class="pr-2"><i class="fab fa-twitter fa-2x fa-color"></i></a>
            <a href="#"><i class="fab fa-google fa-2x fa-color"></i></a>
          </li>
        </ul>
      </div>
    <div v-scroll-to="'#top'" id="gotop" style="display:none">
      <i class="fas fa-chevron-circle-up scroll-icon"></i>
    </div>
      <div class="cart-item" v-if="CartTotal != 0">
        <a @click.prevent="goCheckout()">
          <img class="cart-icon-img" src="https://i.imgur.com/9RBQNgs.png" alt="">
            <span class="cart-icon-text">購物車({{ CartTotal }})</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script scoped>
import $ from 'jquery';

export default {
  data() {
    return {
      CartTotal: '',
    };
  },
  methods: {
    goCheckout() {
      this.$router.push('/checkout');
    },
  },
  mounted() {
    const vm = this;
    vm.$bus.$on('updateCountTotal', (newCountTotal) => {
      vm.CartTotal = newCountTotal;
    });
    // 偵測按鈕
    function showBtnCondition() {
      if ($(this).scrollTop() > 1200) {
        $('#gotop').fadeIn();
      } else {
        $('#gotop').fadeOut();
      }
    }
    $(window).scroll(showBtnCondition);
  },
};

</script>
