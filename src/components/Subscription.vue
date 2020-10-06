<template>
  <div>
    <div class="px-5 pt-5 pb-5 mt-3 sub-box-outside bg-fixed">
      <div class="p-5 text-center sub-box">
        <h4 class="text-coffee text-bold">加入訂閱我們</h4>
          <div class="row no-gutters pt-2">
            <div class="col-md-10 sub-box-inside">
              <input type="e-mail" name="e-mail"
                placeholder="請輸入您的信箱" class="form-control"
                v-validate="'required|email'" :class="{'is-invalid': errors.has('e-mail')}" />
                <span class="text-danger"
                  v-if="errors.has('e-mail')" style="font-family:'微軟正黑體'">
                  必須正確輸入e-mail
                </span>
            </div>
              <div class="col-md-2">
                <button class="btn bg-coffee form-control" style="color:white"
                  @click.prevent="createOrder">送出
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    createOrder() {
      const vm = this;
      vm.$validator.validate().then((result) => {
        if (result) {
          vm.$swal({
            title: '感謝您的訂閱!',
            text: '請點選繼續!',
            icon: 'success',
            button: '繼續',
          });
        }
      });
    },
  },
};
</script>
