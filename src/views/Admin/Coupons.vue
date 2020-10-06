<template>
  <div>
    <loading :active.sync="isLoading">
      <half-circle-spinner :animation-duration="1000" :size="60" color="#835050" />
    </loading>
    <div class="text-left">
      <button class="btn btn-coffee mt-5 ml-3" @click="openCouponModal(true)">新增優惠卷</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th class="d-none-item">折扣百分比</th>
          <th>到期日</th>
          <th class="d-none-phone">是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in coupons" :key="key">
          <td>{{ item.title }}</td>
          <td class="d-none-item">{{ item.percent }}</td>
          <td>{{ item.due_date | date }}</td>
          <td class="d-none-phone">
            <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
            <span v-else class="text-muted">未啟用</span>
          </td>
          <td>
            <button class="btn btn-coffee mr-2" @click="openCouponModal(false, item)">編輯</button>
            <button class="btn btn-danger" @click="openDelCouponModal(item)">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="modal fade" id="couponModal" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">優惠卷</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="title">標題</label>
              <input type="text" class="form-control" id="title"
              v-model="tempCoupon.title" placeholder="請輸入標題"/>
            </div>
            <div class="form-group">
              <label for="coupon_code">優惠碼</label>
              <input type="text" class="form-control" id="coupon_code"
              v-model="tempCoupon.code" placeholder="請輸入優惠碼"/>
            </div>
            <div class="form-group">
              <label for="due_date">到期日</label>
              <input type="date" class="form-control" id="due_date" v-model="due_date" />
            </div>
            <div class="form-group">
              <label for="price">折扣百分比</label>
              <input type="number" class="form-control" id="price"
              v-model="tempCoupon.percent" placeholder="請輸入折扣百分比"/>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" :true-value="1"
                :false-value="0" v-model="tempCoupon.is_enabled" id="is_enabled"/>
                <label class="form-check-label" for="is_enabled">是否啟用</label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="updateCoupon">確認</button>
          </div>
        </div>
      </div>
    </div>
    <!--刪除modal-->
    <div class="modal fade" id="delCouponModal"
    tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ tempCoupon.title }}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">
              取消
            </button>
            <button type="button" class="btn btn-coffee" @click="delCoupon">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import { HalfCircleSpinner } from 'epic-spinners';

export default {
  props: {
    confing: Object,
  },
  data() {
    return {
      coupons: {},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        due_date: 0,
        code: '',
        id: '',
      },
      due_date: new Date(),
      isNew: false,
      isLoading: false,
    };
  },
  components: {
    HalfCircleSpinner,
  },
  watch: {
    due_date() {
      const vm = this;
      const timestamp = Math.floor(new Date(vm.due_date) / 1000);
      vm.tempCoupon.due_date = timestamp;
    },
  },
  methods: {
    openCouponModal(isNew, item) {
      const vm = this;
      $('#couponModal').modal('show');
      vm.isNew = isNew;
      if (vm.isNew) {
        vm.tempCoupon = {};
      } else {
        vm.tempCoupon = item;
        console.log(item);
        vm.due_date = [new Date(vm.tempCoupon.due_date * 1000).toISOString().split('T')];
      }
    },
    // 取得優惠卷
    getCoupons() {
      const vm = this;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_NAME}/admin/coupons`;
      vm.isLoading = true;
      vm.$http.get(url, vm.tempProduct).then((response) => {
        vm.isLoading = false;
        vm.coupons = response.data.coupons;
      });
    },
    // 更新優惠卷
    updateCoupon() {
      const vm = this;
      if (vm.isNew) {
        const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_NAME}/admin/coupon`;
        // eslint-disable-next-line no-unused-vars
        vm.$http.post(url, { data: vm.tempCoupon }).then((response) => {
          $('#couponModal').modal('hide');
          vm.getCoupons();
        });
      } else {
        const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_NAME}/admin/coupon/${vm.tempCoupon.id}`;
        vm.due_date = new Date(vm.tempCoupon.due_date * 1000);
        // eslint-disable-next-line no-unused-vars
        vm.$http.put(url, { data: vm.tempCoupon }).then((response) => {
          $('#couponModal').modal('hide');
          vm.getCoupons();
        });
      }
    },
    // 刪除優惠卷modal
    openDelCouponModal(item) {
      const vm = this;
      $('#delCouponModal').modal('show');
      vm.tempCoupon = { ...item };
    },
    // 刪除優惠卷
    delCoupon() {
      const vm = this;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_NAME}/admin/coupon/${vm.tempCoupon.id}`;
      vm.$http.delete(url).then(() => {
        $('#delCouponModal').modal('hide');
        vm.isLoading = false;
        vm.getCoupons();
      });
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>
