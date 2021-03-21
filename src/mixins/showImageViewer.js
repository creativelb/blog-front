export const showImageViewer = {
  methods: {
    showImgViewer(e) {
      this.$store.commit("showImageViewer", e.target.src);
    },
  }
}