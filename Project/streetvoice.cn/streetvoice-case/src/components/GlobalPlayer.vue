<template>
  <van-popup
    v-model="$store.state.globalPlayerIsShow"
    position="bottom"
    :style="{ height: '100%' }"
    :overlay="false"
  >
    <p>sfds</p>
  </van-popup>
</template>

<script>
import { Popup } from "vant";
export default {
  components: {
    VanPopup: Popup,
  },
};
</script>

<style></style>
