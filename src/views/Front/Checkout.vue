<template>
  <div>
    <div class="container">
      <Alert></Alert>
      <loading :active.sync="isLoading">
        <half-circle-spinner :animation-duration="1000" :size="60" color="#835050" />
      </loading>
      <ul class="step-list text-coffee text-bold">
        <li class="col-sm-12 col-lg-3 pt-2 mt-3"
        :class="{ 'bg-coffee , text-white active': step === 1 }">
          <span>Step:1</span>
          <p>確認訂單內容</p>
        </li>
        <li class="col-sm-12 col-lg-3 pt-2 mt-3"
        :class="{ 'bg-coffee , text-white active': step === 2 }">
          <span>Step:2</span>
          <p>填寫購買資料</p>
        </li>
        <li class="col-sm-12 col-lg-3 pt-2 mt-3"
        :class="{ 'bg-coffee , text-white active': step === 3  }">
          <span>Step:3</span>
          <p>付款資料/完成訂單</p>
        </li>
      </ul>
      <!-- step1 -->
      <div class="col-md-12 col-lg-9 mx-auto" v-if="step === 1">
        <p class="text-center text-coffee text-bold text-28 my-5">訂單資料</p>
        <table class="table text-center" v-if="orderTotal != 0">
          <thead class="text-coffee text-bold">
            <th class="phone-d-none">縮圖</th>
            <th colspan="2">品名</th>
            <th>數量</th>
            <th>價格</th>
            <th>刪除</th>
          </thead>
          <tbody>
            <tr v-for="item in cart.carts" :key="item.id">
              <td class="phone-d-none" style="width:20%">
                <div style="height: 80px; background-size: cover;
                  background-position: center center;"
                  :style="{ backgroundImage: `url(${item.product.imageUrl}` }">
                </div>
              </td>
              <td class="align-middle checkout-text p-0" colspan="2">
                {{ item.product.title }}
                <div class="text-success" v-if="item.coupon">已套用優惠券</div>
              </td>
              <td class="align-middle p-0" style="width:30%">
                <div class="input-group input-group-sm justify-content-center">
                  <div class="input-group-prepend">
                    <button class="btn btn-coffee" type="button"
                      @click.prevent="changeQty(item.id, item.product.id, item.qty, false)">
                      -</button>
                  </div>
                  <input type="text" style="width: 25px"
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    v-model="item.qty"/>
                  <div class="input-group-append">
                    <button class="btn btn-coffee" type="button"
                    @click.prevent="changeQty(item.id, item.product.id, item.qty, true)">
                      +</button>
                  </div>
                </div>
              </td>
              <td class="align-middle">
                {{ item.final_total | currency }}
              </td>
              <td class="align-middle">
                <button type="button" class="btn btn-outline-danger btn-sm"
                  @click="removCartItem(item.id)">
                  <i class="far fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td class="phone-d-none border-0"></td>
              <td colspan="5" class="align-middle text-right border-0">共{{ orderTotal }}筆</td>
            </tr>
            <tr>
              <td class="phone-d-none border-0"></td>
              <td colspan="4" class="align-middle text-right border-0">商品總共</td>
              <td class="align-middle text-right border-0">
                {{ cart.total | currency }}</td>
            </tr>
            <tr v-if="cart.final_total !== cart.total">
              <td class="phone-d-none"></td>
              <td colspan="4" class="text-right text-success">折扣價</td>
              <td class="text-success text-right">{{ cart.final_total | currency }}</td>
            </tr>
          </tfoot>
        </table>
        <div class="input-group input-group-md my-2 ml-auto input-item" v-if="orderTotal != 0">
          <input type="text" class="form-control" placeholder="請輸入優惠碼" name="coupon"
            v-model="coupon_code" :class="{ 'is-invalid': errors.has('coupon') }"
            v-validate="'required'"/>
          <div class="input-group-append">
            <button class="btn btn-coffee" type="button" @click.prevent="addCouponCode()">
              套用優惠碼
            </button>
          </div>
        </div>
        <hr />
        <div v-if="orderTotal != 0">
          <select class="form-control my-2">
            <option>全家取貨</option>
            <option>7-11取貨</option>
            <option>宅配到府</option>
          </select>
          <small class="d-block text-coffee pt-2">兩件以上每件加收 NT$ 20</small>
          <small class="d-block text-coffee">滿 NT$ 1,500 後，運費統一 NT$ 150</small>
          <small class="d-block text-coffee pb-2">滿 NT$ 2,000 免運費</small>
        </div>
        <div class="row" v-if="step === 1">
          <div class="col-md-6" v-if="orderTotal != 0">
            <router-link to="/productlist" class="btn btn-heavy-gray step-btn">
              <i class="fas fa-arrow-left"></i>繼續選購</router-link>
          </div>
          <div class="col-md-6 text-right" v-if="orderTotal != 0">
            <button class="btn btn-coffee step-btn" @click='checkCoupon'>
              下一步 <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div v-if="orderTotal == 0">
        <div class="col-md-9 mx-auto mt-2">
          <div class="noProductImg" style="background-image:url(https://i.imgur.com/vS4QRri.jpg)">
            <div class="noProductOut">
              <div class="noProductIn">
                 <h5 class="pt-3">Opps .....</h5>
                 <span class="d-block pt-3">您目前沒有產品在購物車</span>
                 <button class="btn btn-coffee mt-3 hvr-rotate"
                  @click.prevent="goProductList()">點我去選購產品</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <!-- step2 -->
      <div class="my-5 row" v-if="step === 2">
        <span class="d-block mx-auto text-coffee text-28 text-bold">購買人資料</span>
        <form class="col-md-12" @submit.prevent="createOrder">
          <div class="personal-item form-group col-lg-9 col-md-12 mx-auto">
            <label class="form-text pt-3" for="useremail">*Email</label>
            <input type="email" class="form-control" name="email"
              id="useremail" v-validate="'required|email'"
              v-model="form.user.email" placeholder="請輸入 Email" required/>
            <span class="text-danger" v-if="errors.has('email')">
              {{ errors.first("email") }}
            </span>
          </div>
          <div class="form-group col-lg-9 col-md-12 mx-auto">
            <label class="form-text" for="username">*收件人姓名</label>
            <input type="text" class="form-control" name="name"
              id="username" v-model="form.user.name" placeholder="輸入姓名"
              :class="{ 'is-invalid': errors.has('name') }" v-validate="'required'"/>
            <span class="text-danger" v-if="errors.has('name')">姓名必須輸入</span>
          </div>
          <div class="form-group col-lg-9 col-md-12 mx-auto">
            <label class="form-text" for="useraddress">*收件人地址</label>
            <input type="text" class="form-control" name="address"
              id="useraddress" v-model="form.user.address"
              v-validate="'required'" :class="{ 'is-invalid': errors.has('address') }"
              placeholder="請輸入地址"/>
            <span class="text-danger" v-if="errors.has('address')">地址欄位不得留空</span>
          </div>
          <div class="form-group col-lg-9 col-md-12 mx-auto">
            <label class="form-text" for="usertel">*收件人電話</label>
            <input type="text" class="form-control" name="tel"
              id="usertel" v-model="form.user.tel"
              v-validate="'required|min:10'" :class="{ 'is-invalid': errors.has('tel') }"
              placeholder="請輸入電話"/>
              <span class="text-danger" v-if="errors.has('tel')">電話必須正確輸入</span>
          </div>
          <div class="form-group col-lg-9 col-md-12 mx-auto">
            <label class="form-text" for="comment">備註</label>
            <textarea name="" id="comment" class="form-control"
            cols="10" rows="5" v-model="form.message">
            </textarea>
          </div>
          <div class="form-group col-lg-9 col-md-12 mx-auto d-flex justify-content-between sendbtn">
            <a href="#" class="btn btn-heavy-gray step-btn" @click.prevent="step = 1">
              <i class="fas fa-arrow-left"></i>上一步</a>
            <button class="btn btn-danger step-btn">
              送出訂單<i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </form>
      </div>
      <!-- step3 -->
      <div v-if="step === 3">
        <div class="my-5 row" v-if="checkPoint == false">
          <form class="col-lg-9 col-md-12 mx-auto" @submit.prevent="payOrder">
            <table class="table">
              <thead>
                <th class="bt-0 text-coffee">商品名稱</th>
                <th class="bt-0 text-coffee">商品數量</th>
                <th class="bt-0 text-coffee">單價</th>
              </thead>
              <tbody>
                <tr v-for="item in order.products" :key="item.id">
                  <td class="align-middle">{{ item.product.title }}</td>
                  <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                  <td class="align-middle text-right">{{ item.final_total | currency }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2" class="text-right text-bold">總計</td>
                  <td class="text-right text-danger">{{ order.total | currency }}</td>
                </tr>
              </tfoot>
            </table>
            <table class="table">
              <tbody>
                <tr>
                  <th class="text-coffee" scope="row">信箱</th>
                  <td class="w-75">{{ order.user.email }}</td>
                </tr>
                <tr>
                  <th class="text-coffee" scope="row">姓名</th>
                  <td>{{ order.user.name }}</td>
                </tr>
                <tr>
                  <th class="text-coffee" scope="row">電話</th>
                  <td>{{ order.user.tel }}</td>
                </tr>
                <tr>
                  <th class="text-coffee" scope="row">住址</th>
                  <td>{{ order.user.address }}</td>
                </tr>
                <tr>
                  <th class="checkout-status text-coffee" scope="row">付款狀態</th>
                  <td>
                    <span v-if="!order.is_paid">尚未付款</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
          <div class="form-group col-lg-9 col-md-12 mx-auto d-flex
            justify-content-between sendbtn">
            <a href="#" class="btn btn-coffee step-btn" @click.prevent="goToProduct()">
              <i class="fas fa-arrow-left"></i>
                繼續購物
            </a>
            <button class="btn btn-danger step-btn" @click.prevent="checkPoint = true">
                確認付款
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div v-if="checkPoint === true">
        <div class="col-md-9 mx-auto text-center" id="accordion">
          <div class="noProductImg" style="background-image:url(https://i.imgur.com/dfQksCq.jpg)">
            <div class="noProductOut">
              <div class="noProductIn">
                 <h5 class="pt-3">感謝您的購買</h5>
                 <span class="d-block pt-3">祝您有個美好愉快的一天</span>
                 <button class="btn btn-coffee mt-3"
                  @click.prevent="goProductList()">點我回首頁</button>
              </div>
            </div>
          </div>
          <div class="card" @click.prevent ="point = 1">
            <button class="btn description-btn"
            :class="{'btn-coffee , active': point === 1 }"
            data-toggle="collapse" data-target="#collapseOne"
            aria-expanded="true" aria-controls="collapseOne">
              <h6 class="text-center" @click.prevent="point = 1"
              :class="{ 'text-white , active': point === 1 }">購買訂單</h6>
            </button>
            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
            data-parent="#accordion">
              <div class="card-body">
                <table class="table text-left">
                  <thead>
                    <th class="bt-0 text-coffee">商品名稱</th>
                    <th class="bt-0 text-coffee">商品數量</th>
                    <th class="bt-0 text-coffee">單價</th>
                  </thead>
                  <tbody>
                    <tr v-for="item in order.products" :key="item.id">
                      <td class="align-middle">{{ item.product.title }}</td>
                      <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                      <td class="align-middle text-right">{{ item.final_total | currency }}</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="2" class="text-right text-bold text-coffee">總計</td>
                      <td class="text-right text-danger">{{ order.total | currency }}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
          <div class="card" @click.prevent="point = 2">
            <button class="btn description-btn collapsed" data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="false" aria-controls="collapseTwo"
            :class="{'btn-coffee , active': point === 2 }">
            <h6 :class="{ 'text-white , active': point === 2 }"
            @click.prevent="point = 2">個人資料</h6>
            </button>
            <div id="collapseTwo" class="collapse"
            aria-labelledby="headingTwo" data-parent="#accordion">
              <div class="card-body">
                <table class="table text-left">
                  <tbody>
                    <tr>
                      <th class="text-coffee bt-0" scope="row">信箱</th>
                      <td class="w-75 bt-0">{{ order.user.email }}</td>
                    </tr>
                    <tr>
                      <th class="text-coffee bt-0" scope="row">姓名</th>
                      <td class="bt-0">{{ order.user.name }}</td>
                    </tr>
                    <tr>
                      <th class="text-coffee bt-0" scope="row">電話</th>
                      <td class="bt-0">{{ order.user.tel }}</td>
                    </tr>
                    <tr>
                      <th class="text-coffee bt-0" scope="row">住址</th>
                      <td class="bt-0">{{ order.user.address }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { HalfCircleSpinner } from 'epic-spinners';
import Alert from '../../components/AlertMessage.vue';

export default {
  data() {
    return {
      step: 1,
      textColor: 'white',
      orderTotal: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
      },
      cart: {},
      cartLength: '',
      coupon_code: '',
      isLoading: false,
      status: {
        loadingItem: '',
      },
      orderId: '',
      order: {
        user: {
          email: '',
          name: '',
          tel: '',
          address: '',
        },
      },
      addClick: true,
      subClick: true,
      point: 1,
      checkPoint: false,
    };
  },
  methods: {
    checkdrop1() {
      this.point = 1;
    },
    getCartItem() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_NAME}/cart`;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        vm.cart = response.data.data;
        vm.orderTotal = response.data.data.carts.length;
        vm.isLoading = false;
      });
    },
    checkCoupon() {
      this.step = 2;
    },
    goProductList() {
      this.$router.push('/productlist');
    },
    changeQty(id, productId, qty, calc) {
      const vm = this;
      let num;
      if (calc === true) {
        if (vm.addClick) {
          vm.addClick = false;
          vm.subClick = false;
          setTimeout(() => {
            vm.addClick = true;
            vm.subClick = true;
          }, 1000);
          num = qty + 1;
        }
      } else if (calc === false) {
        if (vm.subClick) {
          vm.addClick = false;
          vm.subClick = false;
          setTimeout(() => {
            vm.addClick = true;
            vm.subClick = true;
          }, 1000);
          num = qty - 1;
        }
      }
      this.updateCart(id, productId, num);
    },
    updateCart(cartId, productId, num) {
      const vm = this;
      const delAPI = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_NAME}/cart/${cartId}`;
      const addAPI = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_NAME}/cart`;
      const newCart = {
        product_id: productId,
        qty: num,
      };
      vm.$http.all([vm.$http.delete(delAPI), vm.$http.post(addAPI, { data: newCart })]).then(vm.$http.spread(() => {
        vm.getCartItem();
      }));
    },
    removCartItem(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_NAME}/cart/${id}`;
      vm.isLoading = true;
      vm.$http.delete(api).then(() => {
        vm.$bus.$emit('message:push', '已成功刪除', 'danger');
        vm.$bus.$emit('updateCart');
        vm.getCartItem();
        vm.isLoading = false;
      });
    },
    addCouponCode() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_NAME}/coupon`;
      const coupon = {
        code: vm.coupon_code,
      };
      vm.isLoading = true;
      vm.$http.post(api, { data: coupon }).then((response) => {
        vm.getCartItem();
        if (response.data.success) {
          vm.$swal.fire({
            icon: 'success',
            title: '優惠碼已成功套用',
          });
        } else {
          vm.$swal.fire({
            icon: 'error',
            title: '優惠碼驗證錯誤',
            text: '請仔細檢查並注意大小寫問題',
          });
        }
        vm.isLoading = false;
      });
    },
    createOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_NAME}/order`;
      const order = vm.form;
      vm.$validator.validate().then((result) => {
        if (result) {
          vm.$http.post(api, { data: order }).then((response) => {
            vm.orderId = response.data.orderId;
            vm.getOrder();
            vm.step = 3;
          });
        }
      });
    },
    getOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_NAME}/order/${vm.orderId}`;
      vm.$http.get(api).then((response) => {
        vm.order = response.data.order;
      });
    },
    payOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_NAME}/pay/${vm.orderId}`;
      vm.$http.post(api).then((response) => {
        if (response.data.success) {
          vm.getOrder();
        }
      });
    },
    goToProduct() {
      this.$router.push('/productlist');
    },
    offxxxListener() {
      this.$bus.$off('updateOrderCart');
      this.$bus.$off('updateStep');
    },
  },
  components: {
    Alert,
    HalfCircleSpinner,
  },
  created() {
    this.getCartItem();
  },
  mounted() {
    const vm = this;
    vm.$bus.$on('updateOrderCart', () => {
      vm.getCartItem();
    });
    vm.$bus.$on('updateStep', () => {
      vm.step = 2;
      vm.getCartItem();
    });
  },
  beforeDestroy() {
    this.offxxxListener();
  },
};
</script>
