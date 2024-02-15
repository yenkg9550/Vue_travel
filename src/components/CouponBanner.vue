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
    calculateCountDown() {
      const now = new Date().getTime();
      this.distance = this.countDownDate - now;
      this.days = Math.floor(this.distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((this.distance % (1000 * 60)) / 1000);
    },
    initializeCountDown() {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth();
      const currentYear = currentDate.getFullYear();

      // Assuming initial count down date is the first day of next month
      const countDownMonth = currentMonth === 11 ? 0 : currentMonth + 1;
      const countDownYear = currentMonth === 11 ? currentYear + 1 : currentYear;

      // Set the count down date to the first day of next month
      this.countDownDate = new Date(countDownYear, countDownMonth, 1, 0, 0, 0).getTime();
    },
    updateCountDownIfNeeded() {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth();
      const currentYear = currentDate.getFullYear();
      const currentDay = currentDate.getDate();

      // If it's a new month, reset count down to 35 days
      if (currentDay === 1) {
        const countDownMonth = currentMonth === 11 ? 0 : currentMonth + 1;
        const countDownYear = currentMonth === 11 ? currentYear + 1 : currentYear;

        // Set the count down date to the first day of next month
        this.countDownDate = new Date(countDownYear, countDownMonth, 1, 0, 0, 0).getTime();
      }
    },
  },
  mounted() {
    this.initializeCountDown();
    this.calculateCountDown();

    setInterval(() => {
      this.calculateCountDown();
      this.updateCountDownIfNeeded();
    }, 1000);
  },
};
</script>
