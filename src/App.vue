<template>
  <div id="app">
    <head-back></head-back>
    <message></message>
    <image-viewer></image-viewer>
    <router-view></router-view>
    <footerr :year="year" :author="author"></footerr>
  </div>
</template>

<script>
import Footerr from "@/components/common/Footer/Footerr.vue";
import HeadBack from "@/components/content/HeadBack/HeadBack.vue";
import ImageViewer from "@/components/common/ImageViewer/ImageViewer.vue";
import Message from "@/components/common/Message/Message.vue";
export default {
  name: "App",
  data() {
    return {
      year: "2021",
      author: "lb",
    };
  },
  mounted() {},

  components: {
    HeadBack,
    ImageViewer,
    Footerr,
    Message,
  },
};
</script>

<style>
#app {
  background-color: #eeeded;
}

@import url("./assets/css/normalize.css");
@import url("./assets/css/base.css");
@import url("./assets/css/my-animation.css");
@import url("./assets/css/editor.css");
</style>
