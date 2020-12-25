<template>
  <van-popup
    v-model="playerIsShow"
    position="bottom"
    :style="{ height: '100%', width: '100%' }"
    :overlay="false"
    class="layser"
  >
    <p @click="setPlayerIsShow(false)">back</p>
    <div>{{ currentMusic }}</div>
  </van-popup>
</template>

<script>
import { Popup } from "vant";
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    VanPopup: Popup,
  },

  computed: {
    ...mapState(["playerIsShow", "currentMusic"]),
  },
  methods: {
    ...mapMutations(["setPlayerIsShow"]),
  },
  mounted() {},
};
</script>
<style></style>

<style lang="scss" scoped></style>
