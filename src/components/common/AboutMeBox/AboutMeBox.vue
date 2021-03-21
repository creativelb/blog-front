<template>
  <div
    class="aboutme-box"
    ref="aboutMeBox"
    :class="{ 'aboutme-fixd': isFix }"
    :style="{ top: top + 'px', width: isFix ? aboutMeBoxWidth + 'px' : '100%' }"
  >
    <div class="img-wrapper">
      <img
        src="../../../assets/img/avator.jpg"
        alt=""
        @click="showImgViewer($event)"
      />
    </div>
    <div class="icons">
      <span class="icon"
        ><i class="iconfont icon-weixin"></i
        ><span class="tips">wechat</span></span
      >

      <span class="icon"
        ><a href="https://blog.csdn.net/li921228527?spm=1000.2115.3001.5343"
          ><i class="iconfont icon-csdn"></i><span class="tips">csdn</span></a
        ></span
      >

      <span class="icon">
        <a href="https://github.com/creativelb">
          <i class="iconfont icon-github"></i><span class="tips">github</span>
        </a></span
      >

      <span class="icon" @click="copyEmail"
        ><i class="iconfont icon-youxiang"></i><span class="tips">email</span>
        <input
          type="text"
          ref="copyEmail"
          value="921228527@qq.com"
          style="z-index: -1; right: -1000px; position: fixed"
        />
      </span>
      <span class="icon" @click="moreClick"
        ><i class="iconfont">...</i><span class="tips">more</span></span
      >
    </div>
  </div>
</template>

<script>
import {showImageViewer} from "@/mixins/showImageViewer.js"
export default {
  name: "AboutMeBox",
  mixins: [showImageViewer],
  props: {
    isFix: {
      type: Boolean,
      default: false,
    },
    top: {
      type: Number,
    },
  },
  data() {
    return {
      avatorUrl: "",
      aboutMeBoxWidth: 0, //页面初始宽度
    };
  },
  mounted() {
    this.aboutMeBoxWidth = this.$refs.aboutMeBox.clientWidth;
    console.log("aboutMeBoxWidth" + this.aboutMeBoxWidth);
  },
  methods: {
    copyEmail() {
      let copyvalue = this.$refs.copyEmail;
      copyvalue.select();
      document.execCommand("Copy");
      alert("复制内容到剪切板");
    },
    moreClick() {
      this.$emit("moreClick");
    },
    // showImgViewer(e) { //抽取到mixin中
    //   this.$store.commit("showImageViewer", e.target.src);
    //   console.log(e.target.src);
    // },
  },
};
</script>

<style scoped>
.aboutme-box {
  /* width: 100%; */
  padding: 10px;
  padding-bottom: 20px;
  background-color: #fff;
  border-radius: 10px;
}
.img-wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 60%;
  overflow: hidden;
}
.img-wrapper img {
  /* width: 100px; */
  width: 100%;
  /* height: 100%; */
  object-fit: contain;
  vertical-align: bottom;
}
.icons {
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.icon {
  /* flex: 1; */
  position: relative;
  text-align: center;
  border-radius: 50%;
  /* overflow: hidden; */
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background-color: #e5e5e5;
  cursor: pointer;
}
.tips {
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  display: none;
}
.icon i {
  font-size: 20px;
}
.icon:hover {
  background-color: #f4692c;
}
.icon:hover i {
  color: #fff;
}
.icon:hover .tips {
  display: block;
}

/* 修改为固定定位 */
.aboutme-fixd {
  position: fixed;
  z-index: 9;
  right: 10%;
  /* top: 0; */
}
</style>