<template>
  <div class="reward">
    <p class="word">
      开个玩笑,点进来可以加个微信讨论博客的的搭建╰(*°▽°*)╯
    </p>
    <img :src="wechatUrl" alt="微信" class="wechat">
  </div>
</template>

<script>
import { ScrollTop } from "@/assets/js/utils";
export default {
  name: "Reward",
  data(){
    return {
      wechatUrl: require('@/assets/img/wechat.jpg')
    }
  },
  mounted() {
    let h = window.innerHeight;
    ScrollTop(h, 300);
  },
};
</script>

<style scoped>
.reward {
  margin-top: 30px;
  margin-bottom:30px;
  background-color: #fff;
  border-radius: 5px;
  /* 触发BFC */
  overflow: hidden; 
}
.word{
  margin-top: 15px;
  padding: 0 10px;
  text-indent: 2em;
  line-height: 1.5;
}
.wechat{
  max-width: 100%;
  margin: 0 auto;
}
</style>