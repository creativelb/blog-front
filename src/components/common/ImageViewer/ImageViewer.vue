<template>
  <div class="image-viewer" v-if="imageViewerData.showFlag" @click.stop="close">
    <img :src="imageViewerData.imgUrl" alt="" class="image" @click.stop />
    <div class="close">
      <i class="iconfont icon-fork"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ImageViewer",
  computed: {
    ...mapGetters(["imageViewerData"]),
  },
  methods: {
    close() {
      this.$store.commit("closeImageViewer");
    },
  },
};
</script>

<style scoped>
.image-viewer {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 19;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}
.image {
  max-width: 100%;
  object-fit: cover;
}
.close {
  position: fixed;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
}
@media screen and (min-width: 701px) {
  .close {
    top: 50px;
    right: 50px;
    padding: 15px;
  }
  .close i {
    color: #dcdcdc;
    font-size: 18px;
  }
}
@media screen and (max-width: 700px) {
  .close {
    top: 20px;
    right: 15px;
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 25px;
  }
  .close i {
    color: #dcdcdc;
    font-size: 10px;
  }
}
</style>