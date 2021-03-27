<template>
  <div class="artical-item">
    <div class="title">{{ artical.name }}</div>
    <div class="info">
      <i class="iconfont icon-zuozhe"></i>{{ artical.author.username }}
      <i class="iconfont icon-rili"></i>{{ time }}
    </div>
    <div class="tags">
      <span class="tag" v-for="tag in artical.tags" :key="tag.id">{{
        tag.name
      }}</span>
    </div>
    <div class="cover">
      <img :src="artical.coverUrl" alt="封面" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticalItem",
  props: {
    artical: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    time() {
      let date = new Date();
      date.setTime(this.artical.modefiedTime );
      console.log(this.artical.modifiedTime);
      return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDay()}日`;
    },
  },
};
</script>

<style scoped>
.artical-item {
  border-radius: 5px;
  margin-top: 30px;
  transition: all ease 0.2s;
  padding: 0 30px;
  border: 1px solid #ccc;
}
.title {
  /* height: 50px; */
  line-height: 50px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
}
.info {
  height: 30px;
  line-height: 30px;
  color: #bbb;
  font-size: 16px;
  /* margin-top: 10px;   */
  text-align: center;
}
.tags {
  margin: 20px 0 20px;
}
.tag {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  padding: 0 15px;
  border-radius: 7px;
  background-color: #eee9e4;
}
.artical-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 5px 5px rgba(0, 0, 0, 0.2);
}
.cover {
  max-height: 300px;
  overflow: hidden;
}
.cover img {
  width: 100%;
  object-fit: contain;
}
</style>