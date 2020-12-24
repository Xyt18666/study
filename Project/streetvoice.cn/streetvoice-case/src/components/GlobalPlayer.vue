<template>
  <van-popup
    v-model="globalPlayerIsShow"
    position="right"
    :style="{ height: '100%', width: '100%' }"
    :overlay="false"
    class="gloval_playser"
  >
    <van-row v-if="currentMusic">
      <van-col
        span="24"
        :style="{ 'background-image': `url(${currentMusic.picUrl})` }"
        class="top_content"
      >
        <van-sticky>
          <van-row>
            <van-col span="22" offset="1" class="top_bar">
              <van-icon
                name="arrow-left"
                size="30"
                color="#666"
                @click="backHome"
              />
              <p v-show="false">{{ currentMusic.name }}</p>
              <van-icon name="cluster-o" size="30" color="#666" />
            </van-col>
          </van-row>
        </van-sticky>
        <van-row type="flex" justify="center">
          <van-col span="11"
            ><img :src="currentMusic.picUrl" alt="" class="header_img"
          /></van-col>
          <van-col span="11" class="header_msg">
            <p>{{ currentMusic.name }}</p>
            <p class="song_name">{{ currentMusic.song.artists[0].name }}</p>
            <play-button class="play_button"></play-button>
          </van-col>
        </van-row>
      </van-col>
    </van-row>
  </van-popup>
</template>

<script>
import { Popup, Col, Row, Icon, Sticky } from "vant";
import { mapState, mapMutations } from "vuex";
import PlayButton from "@/components/PlayButton.vue";

export default {
  components: {
    VanRow: Row,
    VanIcon: Icon,
    VanCol: Col,
    VanPopup: Popup,
    VanSticky: Sticky,
    PlayButton,
  },

  computed: {
    ...mapState(["globalPlayerIsShow", "currentMusic"]),
  },
  methods: {
    ...mapMutations(["setGlobalPlayerIsShow"]),
    backHome() {
      this.setGlobalPlayerIsShow(false);
    },
  },
  mounted() {},
};
</script>
<style></style>

<style lang="scss" scoped>
.top_bar {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 3;
  p {
    color: #fff;
  }
}
.top_content {
  background-size: cover;
  position: relative;

  padding-top: 20px;
}
.top_content:after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  /* 从父元素继承 background 属性的设置 */
  background: inherit;
  filter: blur(3px);
  z-index: 0;
}
.header_img {
  width: 140px;
  margin-top: 10px;
  margin-bottom: -30px;
  border-radius: 0.4rem;
  position: relative;
  z-index: 3;
}
.header_msg {
  z-index: 3;
  color: #fff;
  .song_name {
    font-size: 12px;
  }
  .play_button {
    margin-left: 100px;
    margin-top: 30px;
  }
}
</style>
