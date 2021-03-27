<template>
  <div class="tag">
    <p class="title">标签</p>
    <div class="tags">
      <span
        class="tag-item"
        v-for="(tag, index) in tags"
        :key="index"
        @click="switchList(tag)"
      >
        {{ tag.name }}
      </span>
    </div>
  </div>
</template>

<script>
import { ScrollTop } from "@/assets/js/utils";
import { request } from "@/network/request";
import { mapMutations } from "vuex";
export default {
  name: "Tag",
  data() {
    return {
      tags: [],
    };
  },
  created() {
    // 获取所有tags
    this.getAllTags();
  },
  mounted() {
    let h = window.innerHeight;
    ScrollTop(h, 300);
  },
  methods: {
    getAllTags() {
      let config = {
        url: "/artical/allTags",
        methods: "get",
      };
      request(config).then((res) => {
        if (res.data.code === 200) {
          this.tags = res.data.data;
        } else {
          // console.log(200);
          this.showToast("标签获取失败,请刷新后重试");
          setTimeout(() => {
            this.closeToast();
          }, 2000);
        }
      });
    },
    switchList(tag) {
      let id = tag.id;
      let url = "/home/list";
      this.$router.push({
        path: url,
        query: {
          'tagId': id,
        },
      });
    },
    ...mapMutations(["showToast", "closeToast"]),
  },
};
</script>

<style scoped>
.tag {
  margin: 30px 0;
  background-color: #fff;
  border-radius: 5px;
  /* 触发BFC */
  overflow: hidden;
  padding: 0 10px;
}
.title {
  height: 40px;
  line-height: 40px;
  font-size: 28px;
  margin-top: 10px;
  font-weight: bold;
  text-align: center;
}
.tags {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
}
.tag-item {
  position: relative;
  height: 40px;
  line-height: 40px;
  border: 1px solid #c0c0c0;
  padding: 0 40px;
  font-size: 18px;
  border-radius: 20px;
  user-select: none;
  flex: 0 0 auto;
  transition: all 0.3s ease-out;
  margin-left: 10px;
}
.tag-item:hover {
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
}
.tag-item::before {
  content: "\e657";
  position: absolute;
  top: 0;
  left: 10px;
  font-family: "iconfont" !important;
  font-size: 18px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@media screen and (min-width: 701px) {
  .tag {
    min-height: 500px;
  }
}

@media screen and (max-width: 700px) {
  .tag {
    min-height: 300px;
  }
}
</style>