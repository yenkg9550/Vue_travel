<template>
  <div>
      <loading :active.sync="isLoading">
      <half-circle-spinner :animation-duration="1000" :size="60" color="#835050"/>
    </loading>
    <div class="mt-4">
        <button class="btn btn-coffee mt-4 ml-3" @click="openModal(true)">建立新產品</button>
    </div>
      <table class="table mt-4">
        <thead class="text-left">
          <tr>
            <th class="d-none-item">分類</th>
            <th class="d-none-item">縮圖</th>
            <th class="">產品名稱</th>
            <th class="d-none-item">原價</th>
            <th class="">售價</th>
            <th class="d-none-phone">是否上架</th>
            <th colspan="2">編輯</th>
          </tr>
        </thead>
        <tbody class="">
          <tr v-for="(item) in products" :key="item.id">
            <td class ="d-none-item"> {{ item.category }} </td>
            <td class="d-none-item ">
              <img :src="item.imageUrl" style="max-width:120px">
            </td>
            <td> {{ item.title}}</td>
            <td class="d-none-item">{{ item.origin_price | currency}}</td>
            <td class="">{{ item.price | currency }}</td>
            <td class="d-none-phone">
              <span v-if="item.is_enabled" class="text-success">上架</span>
              <span v-else>未上架</span>
            </td>
            <td class="d-flex justify-content-center">
              <button class="btn btn-coffee mr-2" style="font-size:15px"
              @click="openModal(false, item)">編輯</button>
              <button class="btn btn-danger"  style="font-size:15px"
              @click="openDelProductModal(item)">刪除</button>
            </td>
          </tr>
        </tbody>
      </table>
    <Pagination :pages="pagination" @emitPages="getProducts"></Pagination>

      <!-- Product Modal -->
      <div class="modal fade" id="ProductModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">管理產品</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <label for="title">標題</label>
                    <input type="text" class="form-control" id="title"
                    placeholder="請輸入標題" v-model="tempProduct.title"/>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="category">分類</label>
                      <input type="text" class="form-control" id="category"
                      placeholder="請輸入分類" v-model="tempProduct.category"/>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="price">單位</label>
                      <input type="unit" class="form-control" id="unit"
                      placeholder="請輸入單位" v-model="tempProduct.unit" />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="origin_price">原價</label>
                      <input type="number" class="form-control" id="origin_price"
                      placeholder="請輸入原價" v-model="tempProduct.origin_price"/>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="price">售價</label>
                      <input type="number" class="form-control" id="price"
                      placeholder="請輸入售價" v-model="tempProduct.price"/>
                    </div>
                  </div>
                  <hr />
                  <div class="form-group">
                    <label for="description">產品描述</label>
                    <textarea type="text" class="form-control" id="description"
                    placeholder="請輸入產品描述" v-model="tempProduct.description"></textarea>
                  </div>
                  <div class="form-group">
                    <label for="content">說明內容</label>
                    <textarea type="text" class="form-control" id="content"
                    placeholder="請輸入產品說明內容" v-model="tempProduct.content"></textarea>
                  </div>
                  <div class="form-group">
                    <label for="image">輸入圖片網址</label>
                    <input type="text" class="form-control" id="image"
                    placeholder="請輸入圖片連結" v-model="tempProduct.imageUrl"/>
                  </div>
                  <div class="form-group">
                    <label for="customFile">
                       或 上傳圖片
                      <i class="fas fa-spinner fa-spin" v-if="status.fileUploading"></i>
                    </label>
                    <input type="file" id="customFile" class="form-control"
                    ref="files" @change="uploadFile"/>
                  </div>
                  <img img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80" class="img-fluid" alt :src="tempProduct.imageUrl"/>
                  <div class="form-group">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="is_enabled"
                      v-model="tempProduct.is_enabled" :true-value="1" :false-value="0"/>
                      <label class="form-check-label" for="is_enabled">是否上架</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-danger" data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-coffee" @click="updateProduct">確認</button>
            </div>
          </div>
        </div>
      </div>

    <!-- 刪除Product Modal -->
    <div class="modal fade" id="delProductModal" tabindex="-1"
    role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
            <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="delProduct">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import { HalfCircleSpinner } from 'epic-spinners';
import Pagination from '../../components/Pagination.vue';

export default {
  components: {
    HalfCircleSpinner,
    Pagination,
  },
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
      status: {
        fileUploading: false,
      },
    };
  },
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_NAME}/admin/products?page=${page}`;
      const vm = this;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        vm.isLoading = false;
        vm.products = response.data.products;
        vm.pagination = response.data.pagination;
      });
    },
    delProduct() {
      const vm = this;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_NAME}/admin/product/${vm.tempProduct.id}`;
      vm.$http.delete(url).then(() => {
        $('#delProductModal').modal('hide');
        vm.isLoading = false;
        vm.getProducts();
      });
    },
    openDelProductModal(item) {
      const vm = this;
      $('#delProductModal').modal('show');
      vm.tempProduct = { ...item };
    },
    updateProduct() {
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_NAME}/admin/product`;
      let httpMethod = 'post';
      const vm = this;
      if (!vm.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_NAME}/admin/product/${vm.tempProduct.id}`;
        httpMethod = 'put';
      }
      vm.$http[httpMethod](api, { data: vm.tempProduct }).then((response) => {
        if (response.data.success) {
          $('#ProductModal').modal('hide');
        } else {
          $('#ProductModal').modal('hide');
          vm.getProducts();
        }
      });
    },
    uploadFile() {
      const uploadedFile = this.$refs.files.files[0];
      const vm = this;
      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile);
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_NAME}/admin/upload`;
      vm.status.fileUploading = true;
      vm.$http
        .post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          vm.status.fileUploading = false;
          if (response.data.success) {
            vm.$set(vm.tempProduct, 'imageUrl', response.data.imageUrl);
          } else {
            vm.$bus.$emit('message:push', response.data.message, 'danger');
          }
        });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
        this.isNew = true;
      } else {
        this.tempProduct = { ...item };
        this.isNew = false;
      }
      $('#ProductModal').modal('show');
    },
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = `${token}`;
    this.getProducts();
  },
};
</script>

<style scoped lang="scss">

@media(max-width: 765px){
  .d-none-item{
    display: none;
  }
}
@media(max-width:408px){
  .d-none-phone{
    display: none;
  }
}
</style>
