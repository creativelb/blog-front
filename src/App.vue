<template>
  <div id="app">
    <head-back></head-back>
    <image-viewer></image-viewer>
    <router-view></router-view>
  </div>
</template>

<script>
import HeadBack from '@/components/content/HeadBack/HeadBack.vue'
import ImageViewer from '@/components/common/ImageViewer/ImageViewer.vue';
export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {},

  components: {
    HeadBack,
    ImageViewer
  },
};
</script>

<style>
@import url("./assets/css/normalize.css");
@import url("./assets/css/base.css");
@import url("./assets/css/my-animation.css");
</style>
