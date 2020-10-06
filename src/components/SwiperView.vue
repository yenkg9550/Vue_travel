/* eslint-disable import/no-unresolved */
<template>
    <div>
      <div class="pt-5">
        <swiper :options="swiperOption">
          <swiper-slide class="swiper-item">
            <h3>英國</h3>
            <router-link to="/product/-M3Jg7xNfsGUxlYJEcX5">
              <img src="https://i.imgur.com/Y67yUyI.jpg" alt="Avatar" class="image" />
              <div class="overlay">
                <div class="text">倫敦眼</div>
                  <button class="btn btn-coffee button-item">查看更多</button>
              </div>
            </router-link>
          </swiper-slide>
          <swiper-slide class="swiper-item">
            <h3>西班牙</h3>
            <router-link to="/product/-M3JhT4Zu-G-2r0f5DRo">
              <img src="https://i.imgur.com/C4BSQO8.jpg" alt="Avatar" class="image" />
              <div class="overlay">
                <div class="text">米拉之家</div>
                  <button class="btn btn-coffee button-item">查看更多</button>
              </div>
            </router-link>
          </swiper-slide>
          <swiper-slide class="swiper-item">
            <h3>冰島</h3>
            <router-link to="/product/-M3JfN56T7JNnFvX_ejM">
              <img src="https://i.imgur.com/UEbv9IM.jpg" alt="Avatar" class="image" />
              <div class="overlay">
                <div class="text">藍湖</div>
                  <button class="btn btn-coffee button-item">查看更多</button>
              </div>
            </router-link>
          </swiper-slide>
          <swiper-slide class="swiper-item">
            <h3>希臘</h3>
            <router-link to="/product/-M4rPk-e5u7y3hBMEtRd">
              <img src="https://i.imgur.com/ZaMIEoj.jpg" alt="Avatar" class="image" />
              <div class="overlay">
                <div class="text">雅典衛城</div>
                  <button class="btn btn-coffee button-item">查看更多</button>
              </div>
            </router-link>
          </swiper-slide>
          <swiper-slide class="swiper-item">
            <h3>波蘭</h3>
            <router-link to="/product/-M5c-YRMQClFG56smWJu">
              <img src="https://i.imgur.com/ysfPY4M.jpg" alt="Avatar" class="image" />
              <div class="overlay">
                <div class="text">皇家城堡華沙</div>
                  <button class="btn btn-coffee button-item">查看更多</button>
              </div>
            </router-link>
          </swiper-slide>
          <swiper-slide class="swiper-item">
            <h3>法國</h3>
            <router-link to="/product/-M4rMizy31JDHi24LJCJ">
              <img src="https://i.imgur.com/dqx1Tty.jpg" alt="Avatar" class="image" />
              <div class="overlay">
                <div class="text">羅浮宮</div>
                  <button class="btn btn-coffee button-item">查看更多</button>
              </div>
            </router-link>
          </swiper-slide>
          <swiper-slide class="swiper-item">
            <h3>義大利</h3>
            <router-link to="/product/-M4NRw33zt2GeWx8ZpKF">
              <img src="https://i.imgur.com/zbEbx1U.jpg" alt="Avatar" class="image" />
              <div class="overlay">
                <div class="text">比薩斜塔</div>
                  <button class="btn btn-coffee button-item">查看更多</button>
              </div>
            </router-link>
          </swiper-slide>
          <swiper-slide class="swiper-item">
            <h3>德國</h3>
            <router-link to="/product/-M39PJGc1KALPx_tt7Io">
              <img src="https://i.imgur.com/EZYfvn0.jpg" alt="Avatar" class="image" />
              <div class="overlay">
                <div class="text">科隆大教堂</div>
                  <button class="btn btn-coffee button-item">查看更多</button>
              </div>
            </router-link>
          </swiper-slide>
          <swiper-slide class="swiper-item">
            <h3>烏克蘭</h3>
            <router-link to="/product/-M39PJGc1KALPx_tt7Io">
              <img src="https://i.imgur.com/FplZAnW.jpg" alt="Avatar" class="image" />
              <div class="overlay">
                <div class="text">敖德歌劇院</div>
                  <button class="btn btn-coffee button-item">查看更多</button>
              </div>
            </router-link>
          </swiper-slide>
          <swiper-slide class="swiper-item">
            <h3>挪威</h3>
            <router-link to="/product/-M5e3UtIHXopFGD86AgS">
              <img src="https://i.imgur.com/iQvyz0s.jpg" alt="Avatar" class="image" />
              <div class="overlay">
                <div class="text">羅弗敦群島</div>
                  <button class="btn btn-coffee button-item">查看更多</button>
              </div>
            </router-link>
          </swiper-slide>
        </swiper>
      </div>
    </div>
</template>

<script>
import 'swiper/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerColumn: 2,
        // init: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 7500,
          disableOnInteraction: false,
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          450: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
    };
  },
  components: {
    swiper,
    swiperSlide,
  },
};
</script>
