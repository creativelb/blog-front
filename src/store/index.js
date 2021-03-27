import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imageViewerData: {
      showFlag: false,
      imgUrl: ''
    },
    toastData: {
      showFlag: false,
      message: ''
    }
  },
  getters: {
    imageViewerData(state) {
      return state.imageViewerData
    },
    toastData(state) {
      return state.toastData
    }
  },
  mutations: {
    // 显示ImageViewer
    showImageViewer(state, payload) {
      state.imageViewerData.showFlag = true;
      state.imageViewerData.imgUrl = payload;
    },
    // 关闭ImageViewer
    closeImageViewer(state) {
      state.imageViewerData.showFlag = false;
      state.imageViewerData.imgUrl = '';
    },
    // 显示ImageViewer
    showToast(state, payload) {
      state.toastData.showFlag = true;
      state.toastData.message = payload;
    },
    // 关闭ImageViewer
    closeToast(state) {
      state.toastData.showFlag = false;
      state.toastData.message = '';
    }
  }
})