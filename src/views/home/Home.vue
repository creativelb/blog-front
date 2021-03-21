<template>
  <div class="home">
    <div class="bg" ref="bg">
      <div class="intro largin">
        <p class="name">Hi,lb</p>
        <p class="quotes">Write the code,Change the world</p>
      </div>
      <div class="down" @click="scrollToNext" v-if="downFlag">
        <i class="iconfont icon-down"></i>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="content">
        <ul>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
        <router-view></router-view>
      </div>
      <div class="aboutme">
        <about-me-box
          ref="aboutMeBox"
          @moreClick="moreClick"
          :isFix="isFix"
          :top="top"
        ></about-me-box>
      </div>
    </div>
  </div>
</template>

<script>
import { ScrollTop, getScrollTop } from "@/assets/js/utils.js";
import AboutMeBox from "@/components/common/AboutMeBox/AboutMeBox.vue";
export default {
  components: { AboutMeBox },
  name: "Home",
  data() {
    return {
      downFlag: true,
      isFix: false,
      top: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    // 处理滚动事件
    handleScroll(e) {
      let scrollTop = getScrollTop();
      // console.log(scrollTop);
      if (scrollTop > 100) {
        this.downFlag = false;
      } else {
        this.downFlag = true;
      }
      // 判断是否为固定定位
      if (
        scrollTop >= document.documentElement.clientHeight -38 &&
        document.body.clientWidth > 700
      ) {
        this.isFix = true;
        this.top = 38;
        console.log(this.top);
      } else {
        this.isFix = false;
      }
    },
    //滚动到第二屏
    scrollToNext() {
      let bgHeight = this.$refs.bg.scrollHeight;
      console.log(bgHeight);
      ScrollTop(bgHeight, 300);
    },
    // 点击更多
    moreClick() {},
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll, true);
  },
  components: {
    AboutMeBox,
  },
};
</script>

<style scoped>
.home {
  background-color: #f3f3f3;
}
.bg {
  width: 100%;
  height: 100vh;
  background: url("../../assets/img/bg.jpg") no-repeat center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90%;
}
.name {
  font-size: 50px;
  font-weight: bolder;
  color: #fff;
  margin-bottom: 10px;
}
.quotes {
  font-size: 28px;
  color: #fff;
  margin-top: 10px;
  text-align: center;
}
.largin {
  animation: largein 1.5s ease-out 0s;
}
.down {
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  /* left: 50%; */
  margin: 0 auto;
  bottom: 30px;
  color: #fff;
  /* transform: translateX(-50%); */
  background-color: rgba(0, 0, 0, 0.6);
  animation: arrowupanddown 1s linear infinite;
}
.content {
  flex: 2;
  margin-right: 30px;
}
.aboutme {
  flex: 1;
}
@media screen and (min-width: 701px) {
  .down {
    width: 60px;
    height: 60px;
    padding: 10px;
  }
  .down i {
    font-size: 40px;
  }
  .content-wrapper {
    display: flex;
    flex-direction: row;
    width: 80%;
    margin: 0 auto;
  }
}
@media screen and (max-width: 700px) {
  .down {
    width: 50px;
    height: 50px;
    padding: 10px;
  }
  .down i {
    font-size: 30px;
  }
  .content-wrapper {
    display: flex;
    flex-direction: column;
  }
}
</style>