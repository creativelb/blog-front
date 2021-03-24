<template>
  <div class="about-me">
    <p class="title">关于我</p>
    <p class="intro1">
      大家好,我是lb,欢迎大家来到我的博客.我是一名前端学习者,喜欢各种好玩的小玩意.
    </p>
    <p class="intro2">90后,喜欢美食,喜欢做好吃的.</p>
    <p class="intro3">本博客采用Vue进行开发.</p>

    <p class="title">联系方式</p>
    <p class="intro4">github: https://github.com/creativelb</p>
    <p class="intro5">email: 92122852@qq.com</p>
    <p class="title">开发方式</p>
    <p class="intro6">前端: Vuejs</p>
    <p class="intro7">后端: Java(springboot) Mysql</p>
  </div>
</template>

<script>
import { ScrollTop } from "@/assets/js/utils";
export default {
  name: "AboutMe",
  mounted() {
    let h = window.innerHeight;
    ScrollTop(h,300);
  },
};
</script>

<style scoped>
.about-me {
  border-radius: 10px;
  margin-top: 30px;
  background-color: #fff;
  padding: 10px 15px;
}
.title {
  height: 40px;
  line-height: 40px;
  margin-top: 15px;
  font-size: 26px;
  position: relative;
  margin-left: 10px;
  /* display: inline-block; */
}
.title::before {
  content: "";
  position: absolute;
  left: -8px;
  /* right: 0; */
  top: 3px;
  bottom: 3px;
  border-left: 3px solid #6bc30d;
  background-color: #fff;
}
[class^="intro"] {
  font-size: 16px;
  line-height: 24px;
  text-indent: 2em;
  margin: 10px 0;
}
.intro1,
.intro4,
.intro5 {
  margin-top: 20px;
}
</style>