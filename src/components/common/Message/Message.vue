<template>
  <div class="message" v-if="toastData.showFlag">
    {{ toastData.message }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Message",
  computed: {
    ...mapGetters(["toastData"]),
  },
};
</script>

<style scoped>
.message {
  position: fixed;
  top: 100px;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%);
  width: 800px;
  max-width: 80%;
  height: 50px;
  color: #fff;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
}
</style>