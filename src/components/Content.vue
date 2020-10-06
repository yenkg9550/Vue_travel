<template>
  <div>
    <div class="row mt-3 text-center">
      <div class="col-md-6">
        <div class="mt-2 content-img1 bg-cover">
          <h4 class="content-text text-bold">
            對青年人來說 <br>旅行是教育的一部分
          </h4>
        </div>
          <div class="content-box mt-2">
            <div class="content-border text-bold content-text-info">
              <h3>真正旅行家必是流浪者</h3>
                <h4>經歷者流浪者的快樂</h4>
                  <button class="btn bg-coffee" style="color:white"
                    @click="goProduct">旅遊去</button>
            </div>
          </div>
        </div>
        <div class="col-md-6 display-content-desk">
          <div class="content-box mt-2">
            <div class="content-border text-bold content-text-info">
              <h3>旅行不是為了到達某地</h3>
                <h4>而是為了旅遊</h4>
                  <button class="btn bg-coffee" style="color:white"
                    @click="goProduct">旅遊去</button>
            </div>
          </div>
          <div class="mt-2 content-img2 bg-cover">
            <h4 class="content-text text-bold">
              世界是一本書
              <br />而不旅行的人只讀了一頁
            </h4>
          </div>
        </div>
        <div class="col-md-6 display-content-phone">
          <div class="mt-2 content-img2 bg-cover">
            <h4 class="content-text text-bold">
                 世界是一本書
              <br />而不旅行的人只讀了一頁
            </h4>
          </div>
          <div class="content-box mt-2">
            <div class="content-border text-bold content-text-info">
             <h3>旅行不是為了到達某地</h3>
               <h4>而是為了旅遊</h4>
              <button class="btn bg-coffee" style="color:white"
              @click="goProduct">旅遊去</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    goProduct() {
      this.$router.push('/productlist/');
    },
  },
};
</script>
