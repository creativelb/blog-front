<template>
  <div class="list">
    <artical-item
      v-for="artical in list"
      :key="artical.id"
      :artical="artical"
      @click.native="switchDetail(artical)"
    ></artical-item>
    <div class="more" @click="more" v-if="!isLast">点击加载更多</div>
    <div class="nomore" v-else>没有更多数据了</div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { request } from "@/network/request.js";
import ArticalItem from "@/components/content/ArticalItem/ArticalItem.vue";
export default {
  name: "List",
  data() {
    return {
      tagId: "",
      size: 10,
      page: 0,
      isLast: false,
      list: [],
    };
  },
  created() {
    this.tagId = this.$route.query.tagId;
    this.getArtical();
  },
  methods: {
    // 获取下一页数据 开始页码为零调用此方法获取第一页数据
    getArtical() {
      this.page = this.page + 1;
      let url = "";
      let params = {};
      if (this.tagId === "" || this.tagId === undefined) {
        url = "/artical/allArticals";
        params = {
          size: this.size,
          page: this.page,
        };
      } else {
        url = "/artical/getAritcalByTagId";
        params = {
          size: this.size,
          page: this.page,
          tag: this.tagId,
        };
      }
      let config = {
        method: "get",
        url,
        params,
      };
      request(config).then((res) => {
        // console.log(res);
        if (res.data.code === 200) {
          this.list.push(...res.data.data.list);
          this.isLast = res.data.data.isLastPage;
        } else {
          this.page = this.page - 1;
          this.showToast("数据获取失败");
          setTimeout(() => {
            this.closeToast();
          }, 2000);
        }
      });
    },
    more() {
      this.getArtical();
    },
    switchDetail(artical) {
      let id = artical.id;
      let url = "/detail/" + id;
      this.$router.push(url);
    },
    ...mapMutations(["showToast", "closeToast"]),
  },
  components: { ArticalItem },
};
</script>

<style scoped>
.list {
  margin: 30px 0;
  background-color: #fff;
  border-radius: 5px;
  /* 触发BFC */
  overflow: hidden;
  padding: 0 10px 30px;
}
.more,
.nomore {
  margin-top: 20px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  background-color: #409eff;
  color: #fff;
  user-select: none;
}
.more:hover {
  background-color: #48456d;
}
.nomore {
  background-color: #97dffd;
}
</style>