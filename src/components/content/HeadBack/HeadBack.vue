<template>
  <div class="head-back" :class="switchlayout">
    <div class="head-box">
      <ul class="w clearfix">
        <li
          class="head-box-item"
          @click="switchPage(0, 0)"
          :class="{ 'head-box-item-active': headBoxItemActive(0) }"
        >
          <i class="iconfont icon-shouye"></i><span>首页</span>
        </li>
        <!-- 分类没有做 -->
        <!-- <li
          class="head-box-item"
          @click="switchPage(1, 0)"
          :class="{ 'head-box-item-active': headBoxItemActive(1) }"
        >
          <i class="iconfont icon-leimupinleifenleileibie2"></i
          ><span>分类</span>
        </li> -->
        <li
          class="head-box-item"
          @click="switchPage(2, 0)"
          :class="{ 'head-box-item-active': headBoxItemActive(2) }"
        >
          <i class="iconfont icon-biaoqian"></i><span>标签</span>
        </li>
        <li
          class="head-box-item"
          @click="switchPage(3, 0)"
          :class="{ 'head-box-item-active': headBoxItemActive(3) }"
        >
          <i class="iconfont icon-moneycollect-fill"></i><span>赞赏</span>
        </li>
        <li
          class="head-box-item"
          @click="switchPage(4, 0)"
          :class="{ 'head-box-item-active': headBoxItemActive(4) }"
        >
          <i class="iconfont icon-mingpian"></i><span>About me</span>
        </li>
      </ul>
    </div>
    <div class="mobile-box" @click="mobileContentShow">
      <i class="iconfont icon-leimupinleifenleileibie2"></i>
      <ul v-if="mobileContentShowFlag" @click.stop>
        <li
          class="mobile-box-item"
          @click="switchPage(0, 1)"
          :class="{ 'mobile-box-item-active': headBoxItemActive(0) }"
        >
          <i class="iconfont icon-shouye"></i><span>首页</span>
        </li>
        <!-- 分类没有做 -->
        <!-- <li
          class="mobile-box-item"
          @click="switchPage(1, 1)"
          :class="{ 'mobile-box-item-active': headBoxItemActive(1) }"
        >
          <i class="iconfont icon-leimupinleifenleileibie2"></i
          ><span>分类</span>
        </li> -->
        <li
          class="mobile-box-item"
          @click="switchPage(2, 1)"
          :class="{ 'mobile-box-item-active': headBoxItemActive(2) }"
        >
          <i class="iconfont icon-biaoqian"></i><span>标签</span>
        </li>
        <li
          class="mobile-box-item"
          @click="switchPage(3, 1)"
          :class="{ 'mobile-box-item-active': headBoxItemActive(3) }"
        >
          <i class="iconfont icon-moneycollect-fill"></i><span>赞赏</span>
        </li>
        <li
          class="mobile-box-item"
          @click="switchPage(4, 1)"
          :class="{ 'mobile-box-item-active': headBoxItemActive(4) }"
        >
          <i class="iconfont icon-mingpian"></i><span>About me</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeadBack",
  data() {
    return {
      mobileContentShowFlag: false,
    };
  },
  computed: {
    switchlayout() {
      // console.log(this.$route);
      let flag;
      this.$route.path.indexOf("/detail") === -1
        ? (flag = true)
        : (flag = false);
      return {
        "flow-layout": !flag,
        "fix-layout": flag,
      };
    },
    headBoxItemActive() {
      return function (index) {
        let path = this.$route.path;
        switch (index) {
          case 0:
            if (path.indexOf("/home/list") !== -1) {
              return true;
            }
            break;
          case 1:
            if (path.indexOf("/home/category") !== -1) {
              return true;
            }
            break;
          case 2:
            if (path.indexOf("/home/tag") !== -1) {
              return true;
            }
            break;
          case 3:
            if (path.indexOf("/home/reward") !== -1) {
              return true;
            }
            break;
          case 4:
            if (path.indexOf("/home/aboutme") !== -1) {
              return true;
            }
            break;
        }
      };
    },
  },
  methods: {
    // 切换页面  index:切换到第几个页面 type: 0:pc端 1:移动端
    switchPage(index, type) {
      // this.mobileContentShowFlag = false;
      if (type === 1) {
        this.mobileContentShowFlag = false;
      }
      let url = "";
      switch (index) {
        case 0:
          url = "/home/list";
          break;
        case 1:
          url = "/home/category";
          break;
        case 2:
          url = "/home/tag";
          break;
        case 3:
          url = "/home/reward";
          break;
        case 4:
          url = "/home/aboutme";
          break;
      }
      this.$router.push(url);
    },
    mobileContentShow() {
      this.mobileContentShowFlag = !this.mobileContentShowFlag;
    },
  },
};
</script>

<style scoped>
.fix-layout {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
/* .flow-layout {
} */
.head-box {
  background-color: rgba(40, 42, 44, 0.6);
}
.head-box-item {
  float: left;
  height: 38px;
  line-height: 38px;
  padding: 0 20px;
  cursor: pointer;
  color: #fff;
}
.head-box-item:hover {
  background-color: rgba(72, 69, 108, 1);
}
.head-box-item-active {
  background-color: rgba(80, 80, 110, 1);
}
.mobile-box {
  height: 38px;
  line-height: 38px;
  text-align: center;
  position: relative;
  background-color: rgba(40, 42, 44, 0.6);
}
.mobile-box i {
  font-size: 20px;
  color: #fff;
}
.mobile-box ul {
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: ; */
  z-index: 9;
  background-color: rgba(72, 69, 108);
  color: #fff;
  top: 38px;
}
/* .mobile-box:hover ul{
  display: block;
} */
.mobile-box-item {
  flex: 1;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mobile-box-item i {
  font-size: 14px;
  margin-right: 5px;
}
.mobile-box-item-active {
  background-color: #48576a;
  color: #20a0ff;
}

@media screen and (max-width: 700px) {
  .head-box {
    display: none;
  }
}
@media screen and (min-width: 701px) {
  .mobile-box {
    display: none;
  }
}
</style>