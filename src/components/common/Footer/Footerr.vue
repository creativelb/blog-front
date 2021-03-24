<template>
  <div class="footer">
    <span class="copyright">
      Copyright © {{ year }} {{ author }} All Rights Reserved
    </span>
    <span class="beian"> </span>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    author: {
      type: String,
      default: "lb",
    },
    year: {
      type: String,
      default: "2021",
    },
  },
};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  background-color: #212220;
  line-height: 1.5;
  min-height: 80px;
  padding: 20px 0;
}
.copyright{
  color: #888888;
  font-size: 14px;
}
.beian{
  color: #fff;
  font-size: 14px;
}
</style>