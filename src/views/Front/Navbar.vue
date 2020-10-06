<template>
  <div>
    <Alert></Alert>
    <loading :active.sync="isLoading">
      <half-circle-spinner :animation-duration="1000" :size="60" color="#835050" />
    </loading>
    <nav class="navbar navbar-expand-lg navbar-light nav-item">
      <router-link class="navbar-brand" to="/home">
        <img src="https://s3.amazonaws.com/designmantic-logos/logos/2020/Jan/small-1927-5e25454e1df25.png"
          style="width: 50px;" alt/>
      </router-link>
      <button class="navbar-toggler toggle-button align-items-center p-0" type="button"
        data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
        aria-expanded="false" aria-label="Toggle navigation" style="border: none;">
        <tasty-burger-button :color="color" :active-color="activeColor" type="spin" />
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav text-center">
          <li>
            <router-link class="nav-color nav-link text-bold hvr-bob" to="/home/">首頁</router-link>
          </li>
          <li>
            <router-link class="nav-color nav-link text-bold hvr-bob" to="/productlist/">
            產品
            </router-link>
          </li>
          <li>
            <router-link class="nav-color nav-link text-bold hvr-bob" to="/coupon/">
            優惠卷
            </router-link>
          </li>
        </ul>
        <div class="nav-content navbar-collapse">
          <ul class="ml-auto navbar-nav">
            <li class="d-flex justify-content-center dispaly-user-flex">
              <button class="btn" @click.prevent="goAdmin()">
                <i class="fas fa-user nav-icon"></i>
              </button>
            </li>
            <li class="d-flex justify-content-end">
              <button class="btn display-user-none" @click.prevent="goAdmin()">
                <i class="fas fa-user nav-icon"></i>
              </button>
              <div class="dropdown">
                <button class="btn" type="button" id="dropdownMenu"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                style="padding-right: 0px;">
                  <i class="fas fa-heart nav-icon heart-item" v-if="isFavShow"></i>
                  <i class="far fa-heart nav-icon heart-item" v-else></i>
                  <span class="fav-count" v-if="isFavShow">{{ favTotal }}</span>
                </button>
                <table class="dropdown-menu dropdown-menu-right dropItem table pt-2 px-1"
                style="width: 250px;" aria-labelledby="dropdownMenu">
                  <h5 class="text-center text-coffee text-bold p-2">我的最愛</h5>
                  <span class="text-center text-danger d-block mb-3"
                  v-if="isFavShow == false" style="font-size: 18px">目前沒有任何收藏</span>
                  <tbody>
                    <tr class="text-center" v-for="item in favList" :key="item">
                      <td class="pt-3" style="width: 80%;" v-if="isFavShow">
                        <a href="#"
                        @click.prevent="seeMore(item)">{{ item }}</a>
                      </td>
                      <td style="width: 10%;">
                        <button class="btn p-0" @click.prevent="addFavCart(item)">
                          <i class="fas fa-cart-plus text-coffee"></i>
                        </button>
                      </td>
                      <td style="width: 10%;" v-if="isFavShow">
                        <button class="btn p-0 pr-2" @click.prevent="removeFav(item)">
                          <i class="far fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="3" class="text-center" v-if="isFavShow">
                        <button class="btn btn-outline-danger w-100"
                        @click.prevent="removeFavAll()">
                          刪除全部
                        </button>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div class="dropdown">
                <button class="btn" type="button" id="dropdownMenuButton"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="iconfont icon-shopping-cart--fill nav-icon"
                  style="font-size: 30px;" v-if="isCartShow">
                  </i>
                  <i class="iconfont icon-shopping-cart--line nav-icon"
                    style="font-size: 30px;" v-if="isCartShow == false">
                  </i>
                  <span class="cart-count" v-if="isCartShow">{{ countTotal }}</span>
                </button>
                <table class="dropdown-menu dropdown-menu-right dropItem table pt-2 px-1"
                  aria-labelledby="dropdownMenu" style="width: 330px">
                  <h5 class="text-coffee text-center p-2 text-bold">購物車</h5>
                  <span class="d-block text-danger text-center"
                  v-if="isCartShow == false" style="font-size:18px">目前購物車沒有產品</span>
                  <thead class="text-coffee" v-if="isCartShow">
                    <th class="align-middle" style="border-top: none; width: 50%">名稱</th>
                    <th class="align-middle p-0" style="border-top: none; width: 20%">人數</th>
                    <th class="align-middle" style="border-top: none; width: 20%">價格</th>
                    <th class="align-middle" style="border-top: none; width: 10%">刪除</th>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in cart.carts" :key="index">
                      <td class="align-middle" style="border-top: none">
                        {{ item.product.title }}
                      </td>
                      <td class="align-middle" style="border-top: none">
                        {{ item.qty }}
                      </td>
                      <td class="align-middle" style="border-top: none">
                        {{ item.final_total | currency }}
                      </td>
                      <td class="align-middle text-coffee" style="border-top: none !important">
                        <button type="button" class="btn btn-sm"
                        @click="removCartProduct(item.id)">
                        <i class="far fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2" class="text-right text-coffee text-bold"
                       v-if="isCartShow">
                       總計
                      </td>
                      <td colspan="2" class="text-right"
                       v-if="isCartShow">
                        {{ cart.total | currency }}元
                      </td>
                    </tr>
                    <tr v-if="cart.final_total != cart.total">
                      <td colspan="2" class="text-right text-success">折扣價</td>
                      <td colspan="2" class="text-right text-success" style="width:50%">
                        {{ cart.final_total | currency }}元
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="4" class="text-right" style="border-top: none !important">
                        <a @click.prevent="goCheckout()" class="btn btn-coffee text-white"
                        v-if="isCartShow">
                        結帳去
                        </a>
                     </td>
                   </tr>
                  </tfoot>
                </table>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="navbar-bottom-box" id="bottom-box" v-if="this.window.width < 767">
      <ul class="navbar-bottom-item">
        <li class="d-flex">
          <button class="btn" @click.prevent="goAdmin()">
            <i class="fas fa-user nav-icon"></i>
          </button>
          <button class="btn btn-position" data-toggle="modal"
          data-target="#CartModal" @click.prevent="getCart()">
            <i class="iconfont icon-shopping-cart--fill nav-icon"
            style="font-size: 30px;" v-if="isCartShow">
            </i>
            <i class="iconfont icon-shopping-cart--line nav-icon"
            style="font-size: 30px;" v-if="isCartShow == false">
            </i>
            <span class="cart-count-bottom" v-if="isCartShow">{{ countTotal }}</span>
          </button>
          <div class="dropdown">
            <button class="btn" type="button" id="dropdownMenu"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fas fa-heart nav-icon heart-item" v-if="isFavShow"></i>
              <i class="far fa-heart nav-icon heart-item" v-else></i>
              <span class="fav-count" v-if="isFavShow">{{ favTotal }}</span>
            </button>
            <table class="dropdown-menu dropdown-menu-right dropItem table pt-2"
            style="width: 250px;" aria-labelledby="dropdownMenu">
              <h5 class="text-center text-coffee p-2">我的最愛</h5>
              <tbody>
                <tr class="text-center" v-for="item in favList" :key="item">
                  <td class="pt-3" style="width: 80%;" v-if="isFavShow">
                    <a href="#" @click.prevent="seeMore(item)">{{ item }}</a>
                  </td>
                  <td style="width: 10%;">
                    <button class="btn p-0 pr-2" @click.prevent="removeFav(item)">
                      <i class="far fa-trash-alt"></i>
                    </button>
                  </td>
                  <td style="width: 10%;" v-if="isFavShow">
                    <button class="btn" @click.prevent="removeFav(item)">
                      <i class="far fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="text-center" style="width: 250px; font-size: 18px;"
                  v-if="isFavShow == false">
                    快去加入收藏吧!!
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="3" class="text-center" v-if="isFavShow">
                    <button class="btn btn-outline-danger w-100" @click.prevent="removeFavAll()">
                      刪除全部
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </li>
      </ul>
    </div>
    <div class="modal fade modal-box" id="CartModal"
    tabindex="-1" role="dialog" aria-labelledby="CartModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header" style="align-items: center !important;">
            <h5 class="w-100 text-center">訂單內容</h5>
          </div>
          <table class="table text-center">
            <thead v-if="isCartShow">
              <th>名稱</th>
              <th>人數</th>
              <th>價格</th>
              <th>刪除</th>
            </thead>
            <h5 v-else class="pt-5">把喜歡的產品加入進來吧 !!</h5>
            <tbody>
              <tr v-for="item in cart.carts" :key="item.id">
                <td class="align-middle">
                  {{ item.product.title }}
                  <div class="text-success" v-if="item.coupon">
                    已套用優惠券
                  </div>
                </td>
                <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                <td class="align-middle">{{ item.final_total | currency }}元</td>
                <td class="align-middle">
                  <button type="button" class="btn btn-outline-danger btn-sm"
                  @click="removCartProduct(item.id)">
                    <i class="far fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td colspan="3" class="text-right text-coffee text-bold"
                style="border-top: 1px solid #dee2e6 !important;"
                v-if="isCartShow">
                  總計
                </td>
                <td colspan="2" class="text-right" style="border-top: 1px solid #dee2e6 !important;"
                v-if="isCartShow">
                  {{ cart.total | currency }}元
                </td>
              </tr>
              <tr v-if="cart.final_total !== cart.total">
                <td colspan="3" class="text-right text-success">折扣價</td>
                <td class="text-right text-success">{{ cart.final_total | currency }}元</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="4" class="text-right">
                  <a @click.prevent="goCheckout()" class="btn btn-coffee" v-if="isCartShow">
                    結帳去<i class="fas fa-arrow-right"></i>
                  </a>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import { HalfCircleSpinner } from 'epic-spinners';
import { TastyBurgerButton } from 'vue-tasty-burgers';
import Alert from '../../components/AlertMessage.vue';

export default {
  components: {
    Alert,
    HalfCircleSpinner,
    TastyBurgerButton,
  },
  data() {
    return {
      isClick: true,
      color: '#835050',
      activeColor: '#835050',
      countTotal: 0,
      favTotal: 0,
      isCartShow: false,
      isFavShow: false,
      favoriteItem: JSON.parse(localStorage.getItem('favoriteItemId')) || [],
      favList: [],
      cart: {},
      coupon_code: '',
      isLoading: false,
      status: {
        loadingItem: '',
      },
      window: {
        width: 0,
      },
    };
  },
  methods: {
    getCart() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_NAME}/cart`;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        vm.cart = response.data.data;
        vm.countTotal = vm.cart.carts.length;
        if (vm.cart.carts.length === 0) {
          vm.isCartShow = false;
        } else {
          vm.isCartShow = true;
        }
        vm.isLoading = false;
      });
    },
    updateCart(productId, cartId, num) {
      const vm = this;
      const delAPI = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_NAME}/cart/${cartId}`;
      const addAPI = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_NAME}/cart`;
      const newCart = {
        product_id: productId,
        qty: num,
      };
      vm.$http.all([vm.$http.delete(delAPI),
        vm.$http.post(addAPI, { data: newCart })]).then(vm.$http.spread(() => {
        vm.getCart();
      }));
    },
    goAdmin() {
      this.$router.push('/login');
    },
    addCouponCode() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_NAME}/coupon`;
      const coupon = {
        code: vm.coupon_code,
      };
      vm.isLoading = true;
      vm.$http.post(api, { data: coupon }).then(() => {
        vm.getCart();
        vm.isLoading = false;
      });
    },
    getFavProduct() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_NAME}/products/all`;
      this.$http.get(api).then((response) => {
        const productItem = response.data.products;
        productItem.filter((item) => {
          if (vm.favoriteItem.indexOf(item.id) !== -1) {
            vm.favList.push(item.title);
          }
          return item;
        });
      });
    },
    CheckFavorite() {
      const vm = this;
      vm.favTotal = vm.favoriteItem.length;
      if (vm.favoriteItem.length !== 0) {
        vm.isFavShow = true;
      } else {
        vm.isFavShow = false;
      }
    },
    addCart(id, qty) {
      const vm = this;
      if (vm.isClick) {
        vm.isClick = false;
        const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_NAME}/cart`;
        vm.$http.get(api).then((response) => {
          vm.cart = response.data.data;
          const target = vm.cart.carts.filter((item) => item.product_id === id);
          if (target.length > 0) {
            const sameCartItem = target[0];
            const originQty = sameCartItem.qty;
            const newQty = originQty + qty;
            const productId = sameCartItem.product_id;
            const cartId = sameCartItem.id;
            vm.updateCart(productId, cartId, newQty);
          } else {
            const cart = {
              product_id: id,
              qty,
            };
            this.$http.post(api, { data: cart }).then(() => {
              vm.getCart();
            });
          }
          setTimeout(() => {
            vm.isClick = true;
          }, 500);
        });
      }
      vm.status.loadingItem = id;
    },
    seeMore(data) {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_NAME}/products/all`;
      vm.$http.get(api).then((response) => {
        const singleProduct = response.data.products;
        singleProduct.filter((item) => {
          if (data.indexOf(item.title) !== -1) {
            vm.$bus.$emit('sendId', item.id);
          }
          return item;
        });
      });
    },
    addFavCart(title) {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_NAME}/products/all`;
      vm.$http.get(api).then((response) => {
        const productItem = response.data.products;
        productItem.filter((item) => {
          if (title.indexOf(item.title) !== -1) {
            this.addCart(item.id, 1, item.title);
            this.addRemovefav(item.title);
          }
          return item;
        });
      });
    },
    goCheckout() {
      $('#CartModal').modal('hide');
      this.$router.push('/checkout');
    },
    handleResize() {
      this.window.width = window.innerWidth;
      if (this.window.width <= 768) {
        const scrollStop = function call(callback) {
          if (!callback || typeof callback !== 'function') return;
          let isScrolling;
          window.addEventListener('scroll', () => {
            $('.navbar-bottom-box').slideUp();
            window.clearTimeout(isScrolling);
            isScrolling = setTimeout(() => {
              $('.navbar-bottom-box').slideDown();
            }, 1500);
          }, false);
        };
        scrollStop(() => {
        });
      } else {
        $('.navbar-bottom-box').remove();
      }
    },
    removCartProduct(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_NAME}/cart/${id}`;
      vm.isLoading = true;
      vm.$http.delete(api).then(() => {
        vm.getCart();
        vm.isLoading = false;
        vm.$bus.$emit('message:push', '已成功刪除', 'danger');
        vm.$bus.$emit('updateOrderCart');
      });
    },
    addRemovefav(id) {
      const vm = this;
      vm.favData = vm.favoriteItem.indexOf(id);
      vm.favoriteItem.splice(vm.favData, 1);
      localStorage.setItem('favoriteItemId', JSON.stringify(vm.favoriteItem));
      vm.CheckFavorite();
      vm.$bus.$emit('message:push', '已加入購物車', 'success');
      setTimeout(() => {
        vm.$bus.$emit('returnFavItem', id);
      }, 100);
    },
    removeFav(id) {
      const vm = this;
      vm.favData = vm.favoriteItem.indexOf(id);
      vm.favoriteItem.splice(vm.favData, 1);
      localStorage.setItem('favoriteItemId', JSON.stringify(vm.favoriteItem));
      vm.CheckFavorite();
      vm.$bus.$emit('message:push', '已移除我的最愛', 'danger');
      setTimeout(() => {
        vm.$bus.$emit('returnFavItem', id);
      }, 100);
    },
    removeFavAll() {
      const vm = this;
      vm.favData = vm.favoriteItem;
      vm.favData.splice(0, vm.favData.length);
      localStorage.setItem('favoriteItemId', JSON.stringify(vm.favoriteItem));
      vm.CheckFavorite();
      vm.$bus.$emit('message:push', '已移除我的最愛', 'danger');
      setTimeout(() => {
        vm.$bus.$emit('returnFavItem', vm.favoriteItem);
      }, 100);
    },
    offxxxListener() {
      this.$bus.$off('updateCart');
      this.$bus.$off('updateFavItem');
      this.$bus.$off('addSameCart');
    },
  },
  created() {
    this.getCart();
    this.getFavProduct();
    this.CheckFavorite();
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  watch: {
    favoriteItem() {
      const vm = this;
      if (vm.favList.length !== vm.favoriteItem.length) {
        vm.favList = [];
        vm.getFavProduct();
      }
    },
  },
  mounted() {
    const vm = this;
    vm.$bus.$on('addSameCart', (id, qty) => {
      vm.addCart(id, qty);
    });
    vm.$bus.$on('updateFavItem', (newFavItem) => {
      vm.favoriteItem = newFavItem;
      vm.CheckFavorite();
    });
  },
  destroyed() {
    this.offxxxListener();
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>
