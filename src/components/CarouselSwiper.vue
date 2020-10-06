<template>
  <div>
    <swiper :options="CarouselOption">
    <swiper-slide>
      <div class="bg-cover" style="background-image:url(https://i.imgur.com/24yv4tp.jpg)">
        <div class="carousel-box1">
          <h1 class="text-coffee text-bold">FIFI 愛旅遊</h1>
            <span class="d-block">帶你環遊歐洲世界!!</span>
              <button class="btn btn-coffee hvr-grow" @click.prevent="goProduct()">旅遊去</button>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="bg-cover" style="background-image:url(https://i.imgur.com/FbBDis9.jpg)">
        <div class="carousel-box2 text-right">
          <h3 class="text-coffee text-bold">限時免費</h3>
            <span class="d-block">最大獎真的不用錢</span>
              <button class="btn btn-coffee hvr-grow" @click.prevent="goProduct()">搶購去</button>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="bg-cover" style="background-image:url(https://i.imgur.com/im06fUU.jpg)">
        <div class="carousel-box3">
          <h3 class="text-coffee text-bold">全館特惠中</h3>
          <span class="d-block">滿 NT$ 2,000 免運費</span>
          <button class="btn btn-coffee hvr-grow" @click.prevent="goCoupon()">搶購去</button>
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  data() {
    return {
      CarouselOption: {
        spaceBetween: 30,
        effect: 'fade',
        speed: 600,
        parallax: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 4500,
          disableOnInteraction: false,
        },
      },
    };
  },
  components: {
    swiper,
    swiperSlide,
  },
  methods: {
    goProduct() {
      this.$router.push('/productlist/');
    },
    goCoupon() {
      this.$router.push('/coupon/');
    },
  },
};

</script>
