<template>
  <div class="detail">
    <div class="wrapper">
      <div class="title">{{ artical.name }}</div>
      <div class="info">
        <span class="time">
          <i class="iconfont icon-zuozhe"></i>{{ time }}</span
        >
        <span class="author"
          ><i class="iconfont icon-rili"></i>{{ artical.author.username }}</span
        >
      </div>
      <div class="tags">
        <span class="tag-item" v-for="tag in artical.tags" :key="tag.id">
          {{ tag.name }}
        </span>
      </div>
      <div class="img" v-if="artical.coverUrl.length > 0">
        <img :src="artical.coverUrl" alt="封面" @click="showImgViewer($event)" />
      </div>
      <div
        class="editor"
        v-html="artical.articalContent"
        @click="articalClick($event)"
      ></div>
    </div>
  </div>
</template>

<script>
import { showImageViewer } from "@/mixins/showImageViewer.js";
import { mapMutations } from "vuex";
import { request } from "@/network/request";
export default {
  name: "Detail",
  mixins: [showImageViewer],
  data() {
    return {
      articalId: "",
      artical: null,
    };
  },
  computed: {
    time() {
      let date = new Date();
      date.setTime(this.artical.modefiedTime);
      return `${date.getFullYear()}年${
        date.getMonth() + 1
      }月${date.getDay()}日`;
    },
  },
  created() {
    this.articalId = this.$route.params.id;
    console.log(this.articalId);
    this.getArtical();
  },
  methods: {
    async getArtical() {
      let config = {
        url: "artical/getArtical",
        method: "get",
        params: {
          id: this.articalId,
        },
      };
      let res = await request(config);
      console.log(res);
      if (res.data.code === 200) {
        this.artical = res.data.data;
      } else {
        this.showToast("数据获取失败");
        setTimeout(() => {
          this.closeToast();
        }, 2000);
      }
    },
    articalClick(e) {
      console.log(e.target.nodeName);
      if (e.target.nodeName === "IMG") {
        this.showImageViewer(e.target.src);
      }
    },
    ...mapMutations([
      "showToast",
      "closeToast",
      "showImageViewer",
      "closeImageViewer",
    ]),
  },
};
</script>

<style scoped>
.detail {
  overflow: hidden;
  min-height: calc(100vh - 38px);
}
.wrapper {
  background-color: #fff;
  border-radius: 10px;
}
.title {
  font-size: 28px;
  text-align: center;
  line-height: 1.5;
}
.info {
  text-align: center;
  margin-top: 10px;
  color: #999aaa;
}
.time,
.author {
  margin: 0 5px;
}
.tags {
  margin-top: 20px;
}
.tag-item {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  padding: 0 15px;
  border-radius: 7px;
  background-color: #eee9e4;
  margin: 0 10px;
}
.img {
  text-align: center;
  width: 100%;
  margin-top: 20px;
}
.img img {
  max-width: 100%;
}
.editor {
  margin-top: 20px;
}
@media screen and (min-width: 701px) {
  .wrapper {
    max-width: 80%;
    margin: 30px auto 0;
    padding: 30px 15px;
  }
}

@media screen and (max-width: 700px) {
  .wrapper {
    padding: 20px 10px;
    margin: 30px 0 0;
  }
}
</style>