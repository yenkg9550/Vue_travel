<template>
    <div>
      <div class="SignBox">
        <div class="InputBox box-shadow">
          <router-link to="/home"><img src="https://s3.amazonaws.com/designmantic-logos/logos/2020/Jan/small-1927-5e25454e1df25.png" alt="" class="logo"></router-link>
          <router-link to="/home">← 回到首頁</router-link>
            <form class="sign-text-center" @submit.prevent="signin">
              <div class="form-group">
                <h3 class="sign-text">請登入管理員帳號</h3>
                <input type="email" class="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter email" v-model="user.username">
              </div>
                <div class="form-group">
                  <input type="password" class="form-control"
                  placeholder="Password" v-model="user.password">
                </div>
                <button type="submit" class="btn-sign btn btn-coffee">Sign In</button>
            </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signin() {
      const api = `${process.env.VUE_APP_API}/admin/signin`;
      const vm = this;
      vm.$http.post(api, vm.user).then((response) => {
        if (response.data.success) {
          vm.$router.push('/admin/products');
        }
      });
    },
  },
};
</script>
