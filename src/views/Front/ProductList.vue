<template>
  <div>
    <Alert></Alert>
    <loading :active.sync="isLoading">
      <half-circle-spinner :animation-duration="1000" :size="60" color="#835050" />
    </loading>
    <div class="container-lg" id="top">
      <Navbar></Navbar>
      <nav aria-label="breadcrumb breadcrumb-item">
        <ol class="breadcrumb mt-1 bg-coffee">
          <li class="breadcrumb-item breadcrumb-text-color">
            <router-link to="/">首頁</router-link>
          </li>
          <li class="breadcrumb-item active">旅遊景點</li>
          <li class="breadcrumb-item active">{{ select }}</li>
        </ol>
      </nav>
      <div class="accordion accordion-item" id="accordionExample">
        <div class="card text-center">
          <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <button class="btn btn-link collapsed" type="button"
              data-toggle="collapse" data-target="#collapseOne"
              aria-expanded="false" v-if="collapseStep" @click="collapseStep = false">
                <span class="text-coffee">開啟選單</span>
              </button>
              <button class="btn btn-link collapsed" type="button"
              data-toggle="collapse" data-target="#collapseOne" aria-expanded="false"
              v-else @click="collapseStep = true">
                <span class="text-coffee">關閉選單</span>
              </button>
            </h2>
          </div>
          <div id="collapseOne" class="collapse"
          aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="list-group-item list-group-item-action views text-bold"
            v-for="(item, index) in local.list" :key="index" :class="{ active: select == item }"
            @click.prevent="getLocal(item)">
              {{ item }}
            </div>
          </div>
        </div>
      </div>
      <div class="row list">
        <div class="col-md-3 col-lg-2 col-sm-12 left-list">
          <ul class="list-group mt-3 sticky-top">
            <li class="list-group-item list-group-item-action views text-bold"
            v-for="(item, index) in local.list" :key="index"
            :class="{ 'text-white active': select == item }" @click.prevent="getLocal(item)">
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="col-md-9 col-lg-10 col-sm-12">
          <div class="row">
            <div class="mt-3 product-box col-md-6 col-lg-4 col-sm-12"
            v-for="item in products" :key="item.id">
              <div class="card card-item">
                <div class="product-img"
                :style="{ backgroundImage: `url(${item.imageUrl}` }"
                @click="goProduct(item.id)"></div>
                <i class="far fa-heart fa-item"
                @click="addFavorite(item, item.id)"
                v-if="!checkFavStatus(item)" style="font-size: 25px;"></i>
                <i class="fas fa-heart fa-item"
                @click="addFavorite(item, item.id)"
                v-if="checkFavStatus(item)" style="font-size: 25px;">
                </i>
                <div class="card-body card-middle-item pb-1 bg-light" @click="goProduct(item.id)">
                  <span class="badge badge-coffee float-right ml-2" style="font-size: 15px;"
                    >{{ item.category }}
                  </span>
                  <h5 class="card-title">
                    <a href="#" class="text-coffee text-bold">{{ item.title }}</a>
                  </h5>
                  <p class="card-text">{{ item.content }}</p>
                  <div class="d-flex justify-content-between align-items-baseline product-Card">
                    <div v-if="!item.price">{{ item.origin_price }} 元</div>
                    <del v-if="item.price">${{ item.origin_price }}</del>
                    <div class="product-text" v-if="item.price">{{ item.price | currency }} 元</div>
                  </div>
                </div>
                <div class="card-footer d-flex product-card text-center bg-coffee
                text-white card-display-com">
                  <a class="col-md-5 p-0 more-border" @click="goProduct(item.id)">查看更多</a>
                  <select class="product-select form-control col-md-2 p-0 ml-2"
                    v-model="item.numItem">
                    <option :value="num" v-for="num in 9" :key="num">
                      {{ num }}
                    </option>
                  </select>
                  <a class="col-md-5 p-0 text-hex-green" @click="addtoCart(item.id, item.numItem)">加入購物車</a>
                </div>
                <div class="card-footer card-display d-none bg-coffee"
                style="border: gray 1px solid;">
                    <div class="col-12 text-center">
                      <a class="text-white" @click="goProduct(item.id)">查看更多</a>
                    </div>
                </div>
                <div class="card-footer card-display d-none bg-heavy-gray text-white"
                style="border: gray 1px solid;">
                  <div class="col-12 text-center">
                    <select class="product-select form-control p-0 d-inline"
                    v-model="item.numItem">
                      <option :value="num" v-for="num in 9" :key="num">
                        {{ num }}
                      </option>
                    </select>
                      <a @click="addtoCart(item.id, item.numItem)">加入購物車</a>
                  </div>
                </div>
                <div class="card-footer soldout" v-if="item.is_enabled == 0">
                  <button class="btn btn-danger border soldoutBtn" disabled>已售完</button>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-scroll-to="'#top'" id="returnTop" style="display: none;">
      <i class="fas fa-chevron-circle-up scroll-icon-product"></i>
    </div>
  </div>
</template>

<script>
import { HalfCircleSpinner } from 'epic-spinners';
import $ from 'jquery';
import Navbar from './Navbar.vue';
import Alert from '../../components/AlertMessage.vue';

export default {
  data() {
    return {
      collapseStep: true,
      select: '全部景點',
      products: [],
      productId: '',
      status: {
        loadingItem: '',
      },
      favItem: '',
      favoriteItem: [],
      local: {
        list: [
          '全部景點',
          '法國',
          '英國',
          '德國',
          '義大利',
          '西班牙',
          '波蘭',
          '挪威',
          '烏克蘭',
          '冰島',
          '希臘',
        ],
        select: '全部景點',
      },
    };
  },
  methods: {
    getProducts() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_NAME}/products/all`;
      vm.$store.dispatch('updateLoading', true);
      vm.$http.get(api).then((response) => {
        vm.$store.dispatch('updateLoading', false);
        const NumItem = response.data.products;
        NumItem.forEach((num) => {
          vm.$set(num, 'numItem', 1);
        });
        const tempItem = response.data.products;
        tempItem.forEach((el) => {
          vm.$set(el, 'favItem', false);
          vm.favItem = el.favItem;
        });
        if (vm.local.select !== '全部景點') {
          const localData = response.data.products.filter(
            (item) => item.category === vm.local.select,
          );
          vm.products = localData;
        } else {
          vm.products = response.data.products;
        }
      });
    },
    getItem() {
      const vm = this;
      vm.$bus.$on('areatext', (item) => {
        vm.select = item;
        vm.local.select = item;
        vm.getProducts();
      });
    },
    goProduct(id) {
      this.$router.push(`/product/${id}`);
    },
    getLocal(loaclId) {
      const vm = this;
      vm.local.select = loaclId;
      vm.select = loaclId;
      vm.getProducts();
    },
    addtoCart(id, qty) {
      this.$bus.$emit('addSameCart', id, qty);
    },
    addFavorite(item, id) {
      const vm = this;
      vm.productId = id;
      if (vm.favoriteItem.indexOf(vm.productId) === -1) {
        vm.favItem = true;
        vm.$bus.$emit('message:push', '已加入我的最愛', 'success');
        vm.favoriteItem.push(vm.productId);
      } else {
        vm.favoriteItem.splice(vm.favoriteItem.indexOf(vm.productId), 1);
        vm.favItem = false;
        vm.$bus.$emit('message:push', '已移除我的最愛', 'danger');
      }
      localStorage.setItem('favoriteItemId', JSON.stringify(vm.favoriteItem));
      vm.$bus.$emit('updateFavItem', vm.favoriteItem);
    },
    checkFavStatus(item) {
      const vm = this;
      if (vm.favoriteItem.some((ele) => ele === item.id)) {
        return true;
      }
      return false;
    },
    goCoupon() {
      this.$router.push('/coupon');
    },
  },
  components: {
    Navbar,
    Alert,
    HalfCircleSpinner,
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
  created() {
    const vm = this;
    vm.getItem();
    vm.getProducts();
    vm.favoriteItem = JSON.parse(localStorage.getItem('favoriteItemId')) || [];
  },
  mounted() {
    const vm = this;
    vm.$bus.$on('returnFavItem', (id) => {
      vm.getProducts();
      vm.checkFavStatus(id);
    });
    vm.$bus.$on('sendId', (productId) => {
      vm.goProduct(productId);
    });
    function showBtnCondition() {
      if ($(this).scrollTop() > 1200) {
        $('#returnTop').fadeIn();
      } else {
        $('#returnTop').fadeOut();
      }
    }
    $(window).scroll(showBtnCondition);
  },
};
</script>
