import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imageViewerData: {
      showFlag: false,
      imgUrl: ''
    }
  },
  getters:{
    imageViewerData(state){
      return state.imageViewerData
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
    }
  }
})