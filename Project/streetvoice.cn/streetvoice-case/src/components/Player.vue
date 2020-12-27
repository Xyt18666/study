<template>
  <van-popup
    v-model="playerIsShow"
    position="bottom"
    :style="{ height: '100%', width: '100%' }"
    :overlay="false"
    class="layser player_popup"
  >
    <van-row type="flex" justify="center">
      <van-col span="22" class="top_bar">
        <p>列表</p>
        <p @click="setPlayerIsShow(false)">back</p>
        <p>歌词</p>
      </van-col>
    </van-row>
    <van-row type="flex" justify="center" v-if="currentMusic && playerData">
      <van-col span="24">
        <van-swipe
          class="my-swipe player_swiper"
          :loop="false"
          :show-indicators="false"
          :style="{ height: '100%', width: '100%' }"
          initial-swipe="1"
        >
          <van-swipe-item>1</van-swipe-item>
          <van-swipe-item>
            <img :src="currentMusic.picUrl" alt="" />
            <p>{{ currentMusic.name }}</p>
            <p class="song_name">{{ currentMusic.song.artists[0].name }}</p>

            <van-slider
              v-model="playerData.value"
              @change="onChange"
              @drag-start="ondragStart"
              @drag-end="ondragEnd"
              class=" player_slider"
            ></van-slider>
            <div class="time">
              <p>{{ playerData.curr }}</p>
              <p>{{ playerData.total }}</p>
            </div>
            <div class="button_content">
              <van-icon size="40px" name="arrow-left" />
              <van-icon
                size="40px"
                name="play"
                v-show="playerData.isplay"
                @click="checkPlay"
              />
              <van-icon
                size="40px"
                name="pause"
                v-show="!playerData.isplay"
                @click="checkPlay"
              />
              <van-icon size="40px" name="arrow" />
            </div>
          </van-swipe-item>

          <van-swipe-item>
            <div class="wrapper" ref="wrapper">
              <ul class="lyric_text content">
                <li
                  v-for="(d, i) in playerData.lyric.lines"
                  :key="i"
                  class="items"
                  ref="items"
                  :class="[
                    playerData.lyric.lines[i].time / 1000 <
                      parseInt(playerData.currentTime) &&
                    playerData.lyric.lines[i + 1].time / 1000 >
                      parseInt(playerData.currentTime)
                      ? 'active_lyric'
                      : '',
                  ]"
                >
                  {{ d.txt }}
                </li>
              </ul>
            </div>
          </van-swipe-item>
        </van-swipe>
      </van-col>
    </van-row>
  </van-popup>
</template>

<script>
import { Popup, Col, Row, Swipe, SwipeItem, Slider, Icon } from "vant";
import { mapState, mapMutations } from "vuex";
import BScroll from "@better-scroll/core";

export default {
  components: {
    VanPopup: Popup,
    VanRow: Row,
    VanCol: Col,
    VanSwipe: Swipe,
    VanSwipeItem: SwipeItem,
    VanSlider: Slider,
    VanIcon: Icon,
  },

  data() {
    return {
      scrollTop: [],
      scroll: "",
      audio: "",
      items: "",
      indexs: "",
    };
  },
  computed: {
    ...mapState(["playerIsShow", "currentMusic", "playerData"]),
  },
  methods: {
    ...mapMutations([
      "setPlayerIsShow",
      "setPlayerData",
      "setPlayerDataIsplay",
      "setPlayerDataCurrentTime",
      "setPlayerDataTotal",
      "setPlayerDataValueAndCurr",
      "setPlayerDataDuration",
    ]),

    checkPlay() {
      if (this.audio.paused) {
        this.ondragEnd();
      } else {
        this.ondragStart();
      }
    },
    onChange(values) {
      this.audio.currentTime =
        (parseInt(this.playerData.duration) * values) / 100;

      this.setPlayerDataCurrentTime(
        (parseInt(this.playerData.duration) * values) / 100
      );
    },
    ondragStart() {
      this.audio.pause();
      this.setPlayerDataIsplay(true);
    },
    ondragEnd() {
      this.audio.play();
      this.setPlayerDataIsplay(false);
    },
    getSML(data) {
      let s = Math.floor(data / 3600);
      let f = Math.floor((data % 3600) / 60);
      let m = Math.floor(data % 60);
      s = s < 10 ? "0" + s : s;
      f = f < 10 ? "0" + f : f;
      m = m < 10 ? "0" + m : m;
      return s + ":" + f + ":" + m;
    },
    initPlayer() {
      this.audio = document.querySelector("audio");
      this.ondragStart();
      this.ondragEnd();

      this.audio.oncanplay = () => {
        this.setPlayerDataDuration(this.audio.duration);
        this.setPlayerDataTotal(this.getSML(this.audio.duration));
      };

      this.audio.ontimeupdate = () => {
        this.setPlayerDataCurrentTime(this.audio.currentTime);
        this.setPlayerDataValueAndCurr({
          value: (this.playerData.currentTime / this.playerData.duration) * 100,
          curr: this.getSML(this.audio.currentTime),
        });

        // this.items = document.querySelector(".active_lyric").offsetTop;

        // this.scroll.scrollTo(0, -this.items + 300, 300);

        // console.log(this.playerData.currentTime);

        try {
          this.scroll.scrollToElement(
            document.querySelector(".active_lyric"),
            300,
            0,
            -300
          );
        } catch {
          console.log("dom加载未成功");
        }
      };

      this.audio.onended = () => {
        this.ondragStart();
      };
    },
    initmusicLyric() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: 3,
        click: true,
      });
      // this.items = this.$refs.items;
      // console.log(this.items);
      // this.items.forEach((element) => {
      //   this.scrollTop.push(element.offsetTop);
      // });
      // console.log(this.scrollTop);
      // this.scroll = new BScroll(this.$refs.wrapper, {
      //   probeType: 3,
      //   click: true,
      // });
      // if()
      // this.scroll.scrollTo(0, -18.4, 300);
    },
  },
  watch: {
    currentMusic: {
      handler() {
        this.initPlayer();
      },
    },
    "playerData.lyric": {
      handler() {
        this.$nextTick(function() {
          this.initmusicLyric();
        });
      },
    },
  },
  created() {},
  mounted() {},
  updated() {
    // let items = this.$refs.items;
    // console.log(items);
    // items.forEach((element) => {
    //   this.scrollTop.push(element.offsetTop);
    // });
    // console.log(this.scrollTop);
    // this.scroll = new BScroll(this.$refs.wrapper, {
    //   probeType: 3,
    //   click: true,
    // });
    // this.scroll.scrollTo(0, -18.4, 300)
  },
};
</script>
<style>
.player_popup {
  background: #666;
}
</style>

<style lang="scss" scoped>
.top_bar {
  display: flex;
  justify-content: space-between;
  p {
    color: #fff;
  }
  p.active {
    font-weight: bold;
  }
}
.player_swiper {
  div {
    color: #fff;

    img {
      width: 80%;
      display: block;
      margin: 20px auto;
    }
    p {
      margin: 0px;
      padding: 0 20px;
    }
    .song_name {
      font-size: 12px;
    }
    .time {
      display: flex;
      justify-content: space-between;
    }
    .button_content {
      padding: 20px;
      display: flex;
      justify-content: space-between;
    }
  }
}
.player_slider {
  width: 85%;
  margin: 20px auto;
}
.lyric_text {
  li {
    margin: 20px 0;
  }
  li.active_lyric {
    color: #0f0;
  }
}
.wrapper {
  height: 80vh;
  // overflow: scroll;
}
</style>
