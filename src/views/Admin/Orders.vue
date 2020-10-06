<template>
  <div>
    <loading :active.sync="isLoading">
      <half-circle-spinner :animation-duration="1000" :size="60" color="#835050" />
    </loading>
    <table class="table mt-4">
      <thead>
        <tr>
          <th class="d-none-phone">購買時間</th>
          <th>Email</th>
          <th class="d-none-item">購買款項</th>
          <th class="d-none-phone">應付金額</th>
          <th>是否付款</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in sortOrder" :key="key" :class="{'text-secondary': !item.is_paid}">
          <td class="d-none-phone">{{ item.create_at | date }}</td>
          <td>
            <span v-text="item.user.email" v-if="item.user"></span>
          </td>
          <td class="d-none-item">
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} 數量：{{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right d-none-phone">{{ item.total | currency }}</td>
          <td>
            <strong v-if="item.is_paid" class="text-success">已付款</strong>
            <span v-else class="text-muted">尚未付款</span>
          </td>
        </tr>
      </tbody>
    </table>

    <Pagination :pages="pagination" @emitPages="getOrders"></Pagination>
  </div>
</template>
<script>
import { HalfCircleSpinner } from 'epic-spinners';
import Pagination from '../../components/Pagination.vue';

export default {
  data() {
    return {
      orders: {},
      isNew: false,
      pagination: {},
      isLoading: false,
    };
  },
  components: {
    HalfCircleSpinner,
    Pagination,
  },
  methods: {
    getOrders(currentPage = 1) {
      const vm = this;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_NAME}/admin/orders?page=${currentPage}`;
      vm.isLoading = true;
      vm.$http.get(url, vm.tempProduct).then((response) => {
        vm.orders = response.data.orders;
        vm.pagination = response.data.pagination;
        vm.isLoading = false;
      });
    },
  },
  computed: {
    sortOrder() {
      const vm = this;
      let newOrder = [];
      if (vm.orders.length) {
        newOrder = vm.orders.sort((a, b) => {
          // is_paid 是否有付款
          const aIsPaid = a.is_paid ? 1 : 0;
          const bIsPaid = b.is_paid ? 1 : 0;
          return bIsPaid - aIsPaid;
        });
      }
      return newOrder;
    },
  },
  created() {
    this.getOrders();
  },
};
</script>

<style scoped lang="scss">

@media(max-width: 679px){
  .d-none-item{
    display: none;
  }
}
@media(max-width: 493px){
  .d-none-phone{
    display: none;
  }
}
</style>
