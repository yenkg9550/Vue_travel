<template>
  <div>
    <div class="row mt-3 py-3 coupon-item">
      <div class="col-md-5 col-sm-12 coupon-item-set">
        <div>
          <h5 class="text-coffee text-bold">限時領取coupon優惠卷</h5>
            <h5 style="color:red">
              <i class="fas fa-stopwatch"></i>
              {{ `${days}天 ${hours}時 ${minutes}分 ${seconds}秒` }}</h5>
        </div>
      </div>
      <div class="offset-md-4"></div>
        <div class="col-md-3 col-sm-12 d-flex align-items-center justify-content-center">
          <button class="btn btn-coffee mt-2" style="color:white" @click.prevent="goCoupon()">
            快速領取!!
          </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countDownDate: '',
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      distance: 0,
    };
  },
  methods: {
    goCoupon() {
      this.$router.push('/coupon');
    },
  },
  mounted() {
    const vm = this;
    vm.countDownDate = new Date('Dec 1 2020 00:00:00').getTime();
    setInterval(() => {
      const now = new Date().getTime();
      vm.distance = vm.countDownDate - now;
      vm.days = Math.floor(vm.distance / (1000 * 60 * 60 * 24));
      vm.hours = Math.floor((vm.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      vm.minutes = Math.floor((vm.distance % (1000 * 60 * 60)) / (1000 * 60));
      vm.seconds = Math.floor((vm.distance % (1000 * 60)) / 1000);
      if (vm.distance < 0) {
        if (vm.distance < 1000 * 60 * 60 * 24) {
          vm.countDownDate += (1000 * 60 * 60 * 24 * 1) * 365;
        }
      }
    }, 1000);
  },
};
</script>
