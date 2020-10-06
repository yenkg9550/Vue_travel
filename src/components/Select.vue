<template>
  <div>
    <div class="Hotselect">
      <h2 class="text-center text-bold mt-5">熱門地區</h2>
        <ul class="row text-center d-flex justify-content-center">
          <li class="col-md-3 col-sm-3 Hotselect-box select-img0 bg-cover" @click="areaItem('義大利')">
            <a>
              <h4>義大利</h4>
            </a>
          </li>
          <li class="col-md-3 col-sm-3 Hotselect-box select-img1 bg-cover" @click="areaItem('英國')">
            <a>
              <h4>英國</h4>
            </a>
          </li>
          <li class="col-md-3 col-sm-3 Hotselect-box select-img2 bg-cover" @click="areaItem('冰島')">
            <a>
              <h4>冰島</h4>
            </a>
          </li>
          <li class="col-md-3 col-sm-3 Hotselect-box select-img3 bg-cover" @click="areaItem('挪威')">
            <a>
              <h4>挪威</h4>
            </a>
          </li>
          <li class="col-md-3 col-sm-3 Hotselect-box select-img4 bg-cover" @click="areaItem('法國')">
            <a>
              <h4>法國</h4>
            </a>
          </li>
          <li class="col-md-3 col-sm-3 Hotselect-box select-img5 bg-cover" @click="areaItem('德國')">
            <a>
              <h4>德國</h4>
            </a>
          </li>
        </ul>
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
    areaItem(item) {
      setTimeout(() => {
        this.$bus.$emit('areatext', item);
      }, 100);
      this.$router.push('/productlist');
    },
  },
};
</script>
