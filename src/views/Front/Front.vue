<template>
    <div>
      <div class="container-lg">
      <!--Navbar-->
      <HomeNavbar></HomeNavbar>

      <!-- Carousel Swiper -->
      <CarouselSwiper></CarouselSwiper>

      <!-- Select -->
      <Select></Select>

      <!--icon-->
      <Icon></Icon>

      <!-- get coupon -->
      <CouponBanner></CouponBanner>

      <!-- swiper -->
      <SwiperView></SwiperView>

      <!-- content -->
      <Content></Content>

      <!-- subscription -->
      <Subscription></Subscription>

      <!-- footer -->
      <Footer></Footer>

      </div>
    </div>
</template>

<script>
import HomeNavbar from './HomeNavbar.vue';
import CarouselSwiper from '../../components/CarouselSwiper.vue';
import Select from '../../components/Select.vue';
import Icon from '../../components/Icon.vue';
import CouponBanner from '../../components/CouponBanner.vue';
import SwiperView from '../../components/SwiperView.vue';
import Content from '../../components/Content.vue';
import Subscription from '../../components/Subscription.vue';
import Footer from '../../components/Footer.vue';

export default {
  data() {
    return {
      CarouselOption: {},
    };
  },
  components: {
    HomeNavbar,
    CarouselSwiper,
    Select,
    Icon,
    CouponBanner,
    SwiperView,
    Content,
    Subscription,
    Footer,
  },
};
</script>
