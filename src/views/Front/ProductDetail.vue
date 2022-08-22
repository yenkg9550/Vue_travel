<template>
  <div>
    <loading :active.sync="isLoading">
      <half-circle-spinner :animation-duration="1000" :size="60" color="#835050" />
    </loading>
    <div class="container">
      <HomeNavbar></HomeNavbar>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mt-1 bg-coffee">
          <li class="breadcrumb-item breadcrumb-text-color">
            <router-link to="/">首頁</router-link>
          </li>
          <li class="breadcrumb-item breadcrumb-text-color">
            <router-link to="/productlist">旅遊景點</router-link>
          </li>
          <li class="breadcrumb-item active">{{ product.title }}</li>
        </ol>
      </nav>
      <div class="row">
        <div class="col-md-12 col-lg-8 text-center my-auto">
          <swiper :options="CarouselOption">
            <swiper-slide>
              <img :src="imgSrc" class="bg-item" />
            </swiper-slide>
            <swiper-slide>
              <img src="https://i.imgur.com/7ZOYSCP.png" class="bg-item" />
            </swiper-slide>
            <swiper-slide>
              <img src="https://i.imgur.com/NZNEg9N.jpg" class="bg-item" />
            </swiper-slide>
            <swiper-slide>
              <img src="https://i.imgur.com/nEPB8Uu.jpg" class="bg-item" />
            </swiper-slide>
            <swiper-slide>
              <img src="https://i.imgur.com/5lXG6IE.jpg" class="bg-item" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
        <!-- 右側資訊 -->
        <div class="col-md-12 col-lg-4 right-info">
          <h4 class="text-center text-bold text-coffee">{{ product.title }}</h4>
          <hr />
          <div class="row">
            <div class="col-md-12" v-if="!product.price">{{ product.origin_price }} 元</div>
            <del class="col-md-12 text-origin"
            v-if="product.price">原價 {{ product.origin_price }} 元</del>
            <div class="col-md-12 pt-3">
              <div class="discountPrice text-danger" v-if="product.price">
                限時優惠 {{ product.price }} 元
              </div>
              <div>
                <i class="fas fa-stopwatch text-danger"></i>
                <span class="text-danger text-bold">
                  {{ `${days}天 ${hours}時 ${minutes}分 ${seconds}秒` }}
                </span>
              </div>
            </div>
            <hr />
            <div class="col-md-12 pt-3">
              <select class="text-center form-control" v-model="itemNum">
                <option value="0" disabled selected>請選擇人數</option>
                <option :value="num" v-for="num in 9" :key="num">
                  {{ num }} {{ product.unit }}
                </option>
              </select>
            </div>
            <div class="col-md-12 pt-3 text-coffee">
              <i class="far fa-clock"></i><small class="pl-2">24小時內確認訂單</small>
            </div>
            <div class="col-md-12 pt-1 text-coffee">
              <i class="fas fa-user-tie"></i><small class="pl-2">優秀專業人員服務</small>
            </div>
            <div class="col-md-12 pt-1 text-coffee">
              <i class="far fa-grin-beam"></i><small class="pl-2">最優惠的價格</small>
            </div>
            <div class="col-md-12 pt-1">
              小計：<span class="text-success">{{ itemNum * product.price }}元</span>
            </div>
          </div>
          <hr />
          <button class="btn btn-coffee px-5 mt-2 w-100"
          @click.prevent="addtoCart(product.id, itemNum)">
            加入購物車
          </button>
          <button class="btn btn-danger px-5 mt-2 w-100"
            @click.prevent="goCheck(product.id, itemNum)">直接結帳
          </button>
          <small class="pt-2 d-block text-coffee">
            購買即視為同意<br />取消政策 取消訂單，將收取所有實際產生費用
          </small>
        </div>
      </div>
      <hr />
      <div class="col-md-12">
        <h4 class="text-center text-coffee text-bold">【產品介紹】</h4>
        <ul class="list py-2">
          <li>
            如果你想要去歐洲大城市採購、買各種奢侈品香水化妝品之類的，
            享受低廉的價格，那麼法國巴黎的老佛爺、英國倫敦的商業街、
            義大利米蘭的名牌店是不能錯過的三條最重要線路，
            當然在比利時的安特衛普的時尚街也可以買到西歐最時尚的服飾，
            北歐的丹麥瑞典首都也都可以買到最棒的北歐時尚品牌服裝。
            總體來說歐洲最潮的就在西歐、北歐，以及義大利，西班牙的時尚產業比較一般。
          </li>
          <br />
          <li>
            如果你比較喜歡自然風景，那麼瑞士、挪威、冰島、法國都算是很好的選擇，
            不但可以看到峽灣、山川、冰川還能看到各種高地、河流、花園、湖泊、溫泉，
            尤其是北歐的挪威、冰島、瑞典、芬蘭冬天的時候可以看到極光，夏天就可以享受24小時日光沐浴的極晝。
          </li>
          <br />
          <li>
            如果你喜歡歷史建築，那麼歐洲最美的未被破壞過的首都應該算是布拉格了。
            二戰期間只有這座城市希特勒下令沒有破壞，還保持著歷史的原貌，
            其他大部分歐洲國家都被炸的滿目瘡痍，雖然歐洲重建工作非常好，
            能夠按照原貌建起來，但是要想看到最純粹的歐洲古建築那就是這裡了。
          </li>
          <br />
          <li>
            如果你喜歡文化歷史藝術，參觀博物館是個很好的選擇，
            知名的包括倫敦的大英博物館，巴黎的羅浮宮、奧賽博物館，梵蒂岡的博物館、佛羅倫斯的烏菲齊藝術館，
            大英博物館和羅浮宮有來自世界各地的展品，大部分是通過戰爭搶奪過來的。不過因為他們的保存質量很高，
            也讓這些文物能夠得以很好的留存下來並展示給世界各地的人們欣賞。
          </li>
          <br />
          <li>
            如果你比較喜歡看宮殿和城堡， 那麼法國的羅浮宮、楓丹白露、愛麗舍宮，
            德國波茲坦的無憂宮、奧地利的美泉宮，俄羅斯的克利姆林宮、羅馬的金宮，
            梵蒂岡宮殿、盧森堡宮、英國的白金漢宮等都是不可錯過的地方。
          </li>
        </ul>
      </div>
      <hr />
      <div class="col-md-12">
        <h4 class="text-center text-coffee text-bold py-3">【相關產品】</h4>
        <swiper :options="SwiperOption">
          <swiper-slide class="swiper-box px-1" v-for="(item, i) in filterProduct" :key="i">
            <a href="#" @click.prevent="gotoProduct(item.id)" class="hvr-bob">
              <span class="swiper-position mr-3 mt-2 p-1">{{ item.title }}</span>
              <img :src="item.imageUrl" class="bg-carousel" />
            </a>
          </swiper-slide>
        </swiper>
      </div>
      <hr />
      <h4 class="text-center text-coffee text-bold py-3">【報名須知】</h4>
      <div class="accordion text-center" id="accordionExample">
        <div class="card" @click="point = 1">
          <button class="btn description-btn collapse-item"
            type="button" :class="{ 'btn-coffee , active': point === 1 }"
            data-toggle="collapse" data-target="#collapseOne"
            aria-expanded="true" aria-controls="collapseOne">
            <h6 :class="{ 'text-white , active': point === 1 }">報名須知與注意事項</h6>
          </button>
          <div id="collapseOne" class="collapse"
            aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
              <ul class="text-left">
                <li>
                  此行程20人成團，屬超值特惠行程，此行程採合車合團方式走團，但不因此而影響行程。
                </li>
                <li>本商品嬰兒定義：限制0~3歲以下，不含車位及其他活動費用，僅含保險及作業費用。</li>
                <li>
                  此行程可依當天人數、活動節慶或天候等…因素，由領隊調整行程順序，本公司不另公告。
                </li>
                <li>
                  請於規定時間內準時集合，行程中如旅客因個人因素私自脫隊或集合不到，本公司不予退費。
                </li>
                <li>
                  以上行程所載明之行車時間僅供參考，因路況或假日車流過大時，行程順序或時間將視實際情況調整。
                </li>
                <li>如有身體不適請自備個人隨身藥品：如暈車藥、感冒藥、防蚊蟲液...等。</li>
                <li>山區氣候溫差較大，敬請自備禦寒衣物及雨具。</li>
                <li>若遇天候不佳或不可抗拒之因素，本公司保有取消或變更行程的權利。</li>
                <li>旅客同意，本商品經訂購付款後，如要取消或延期所衍生之費用需自行負責。</li>
                <li>
                  通知取消日需以人事行政局公告之正常上班時間為依準，超過時間以下個工作日計算，敬請見諒。
                </li>
                <li>行程內包含的活動項目為『附加贈送』放棄者恕不退費。</li>
                <li>
                  本商品經訂購付款完成後，視同雙方同意簽屬觀光局發布的【國內旅遊定型化契約書】<br />
                  恕無法任意更改日期及行程，如要取消或延期將按照契約收取相關費用。
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card" @click="point = 2">
          <button class="btn collapsed description-btn" type="button"
            :class="{ 'btn-coffee , active': point === 2 }"
            data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="false" aria-controls="collapseTwo">
            <h6 :class="{ 'text-white , active': point === 2 }">報名繳款方式</h6>
          </button>
          <div id="collapseTwo"
            class="collapse" aria-labelledby="headingTwo"
            data-parent="#accordionExample">
            <div class="card-body">
              <ul class="text-left">
                <li>報名：請直接在網路上填妥訂購單，並送出資料，即完成報名程序。</li>
                <li>線上預約並非保證訂位成功，仍需以客服人員回覆確認為準。</li>
                <li>請詳列姓名，生日，身分證字號。以利保險作業。另素食者請事前告知。</li>
                <li>繳費：在行程確認（業務人員通知確認）之後，請於規定的時間內繳清團費。</li>
                <li>如需任何服務請電冾客服人員02-25612999。我們將竭誠為您服務！</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card" @click="point = 3">
          <button class="btn collapsed description-btn"
            type="button" :class="{ 'btn-coffee , active': point === 3 }"
            data-toggle="collapse" data-target="#collapseThree"
            aria-expanded="false" aria-controls="collapseThree">
            <h6 :class="{ 'text-white , active': point === 3 }">報名費用相關問題</h6>
          </button>
          <div id="collapseThree" class="collapse"
            aria-labelledby="headingThree" data-parent="#accordionExample">
            <div class="card-body">
              <ul class="text-left">
                <h6>【費用包含】</h6>
                <li>一日車資</li>
                <li>行程各景點門票</li>
                <li>每位旅客享200萬旅遊責任險+20萬醫療險</li>
              </ul>
              <ul class="text-left">
                <h6>【費用不包含】</h6>
                <li>旅遊景點精緻伴手禮</li>
                <li>提醒您別忘了給予辛勞的司導人員嘉勉鼓勵，依照國際禮儀小費每人每天100元。</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import { HalfCircleSpinner } from 'epic-spinners';
import 'swiper/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import HomeNavbar from './HomeNavbar.vue';
import Footer from '../../components/Footer.vue';

export default {
  components: {
    HomeNavbar,
    HalfCircleSpinner,
    Footer,
    swiper,
    swiperSlide,
  },
  data() {
    return {
      CarouselOption: {
        spaceBetween: 30,
        speed: 600,
        parallax: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 4500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      SwiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          450: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
      local: '',
      countDownDate: '',
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      distance: 0,
      title: '',
      price: '',
      qty: '',
      categoryData: '',
      imgSrc: '',
      detailId: '',
      itemNum: '0',
      product: {},
      products: {},
      filterProduct: {},
      status: {
        loadingItem: '',
      },
      isLoading: false,
      cart: '',
      point: '',
    };
  },
  methods: {
    getProduct(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_NAME}/product/${id}`;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        vm.product = response.data.product;
        vm.product.num = 0;
        vm.itemNum = vm.product.num;
        vm.imgSrc = response.data.product.imageUrl;
        vm.isLoading = false;
        vm.categoryData = response.data.product.category;
        vm.getProducts(vm.categoryData);
      });
    },
    getProducts(items) {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_NAME}/products/all`;
      vm.$http.get(api).then((response) => {
        vm.products = response.data.products;
        vm.filterProduct = vm.products.filter((item) => item.category === items);
        vm.filterProduct.splice(items, 1);
      });
    },
    gotoProduct(id) {
      this.$router.push(`/product/${id}`);
      window.location.reload();
    },
    addtoCart(id, qty) {
      if (qty === 0) {
        this.$bus.$emit('message:push', '請選擇正確人數', 'danger');
        return;
      }
      this.$bus.$emit('updateSameCart', id, qty);
    },
    goCheck(id, qty) {
      if (qty === 0) {
        this.$bus.$emit('message:push', '請先選擇數量', 'danger');
        return;
      }
      this.$bus.$emit('updateSameCart', id, qty);
      this.$router.push('/checkout');
      setTimeout(() => {
        this.$bus.$emit('updateStep');
      }, 1000);
    },
  },
  created() {
    const vm = this;
    vm.detailId = vm.$route.params.detailId;
    vm.getProduct(vm.detailId);
    vm.getProducts();
  },
  mounted() {
    const vm = this;
    vm.countDownDate = new Date('Apr 1 2023 00:00:00').getTime();
    setInterval(() => {
      const now = new Date().getTime();
      vm.distance = vm.countDownDate - now;
      vm.days = Math.floor(vm.distance / (1000 * 60 * 60 * 24));
      vm.hours = Math.floor((vm.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      vm.minutes = Math.floor((vm.distance % (1000 * 60 * 60)) / (1000 * 60));
      vm.seconds = Math.floor((vm.distance % (1000 * 60)) / 1000);
      if (vm.distance < 0) {
        if (vm.distance < 1000 * 60 * 60 * 24) {
          vm.countDownDate += 1000 * 60 * 60 * 24 * 1 * 365;
        }
      }
    }, 1000);
  },
  destroyed() {
    this.$bus.$off('updateSameCart');
  },
};
</script>
