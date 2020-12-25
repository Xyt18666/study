<template>
  <div class="find">
    <van-row>
      <van-col span="24" class="banner_content">
        <van-swipe
          class="my-swipe"
          :autoplay="3000"
          indicator-color="white"
          :show-indicators="false"
        >
          <van-swipe-item v-for="(d, i) in bannerList" :key="i">
            <a :href="d.url">
              <img :src="d.pic" alt="" />
            </a>
          </van-swipe-item>
        </van-swipe>
      </van-col>
    </van-row>
    <van-row type="flex" justify="center">
      <van-col span="22" class="song_day_title title">
        <h3>Song of The Day</h3>
        <p>更多</p>
      </van-col>
    </van-row>
    <van-row type="flex" justify="center">
      <van-col span="22" class="song_day">
        <a href="#">
          <van-row type="flex" justify="space-between" v-if="songDay">
            <van-col span="7">
              <img :src="songDay.picUrl" alt="" />
            </van-col>
            <van-col span="12">
              <div class="song_msg">
                <h5>★ Song of the Day</h5>
                <p>{{ songDay.name }}</p>
                <p>{{ songDay.alg }}</p>
              </div>
            </van-col>
            <van-col span="5" class="play_button">
              <div class="play">></div>
            </van-col>
          </van-row>
        </a>
      </van-col>
    </van-row>
    <van-row type="flex" justify="center">
      <van-col span="22" class="song_recommend_title title">
        <h3>街声推荐</h3>
        <p>更多</p>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="24" class="song_recommend">
        <ul class="recommend_list" v-if="recommendList">
          <li v-for="(d, i) in recommendList" :key="i" @click="setThisMusic(d)">
            <img :src="d.picUrl" alt="" />
            <p>{{ d.name }}</p>
            <p class="song_name">{{ d.song.artists[0].name }}</p>

            <play-button
              class="play_button"
              @click.native.stop="toPlayer(d)"
            ></play-button>
          </li>
        </ul>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { Col, Row, Swipe, SwipeItem } from "vant";
import { mapMutations } from "vuex";
import PlayButton from "@/components/PlayButton.vue";

export default {
  components: {
    VanRow: Row,
    VanCol: Col,
    VanSwipe: Swipe,
    VanSwipeItem: SwipeItem,
    PlayButton,
  },
  created() {
    this.getBanner();
    this.getSongDay();
    this.getRecommendList();
  },
  data() {
    return {
      bannerList: null,
      songDay: null,
      recommendList: null,
    };
  },
  methods: {
    ...mapMutations([
      "setGlobalPlayerIsShow",
      "setPlayerIsShow",
      "setCurrentMusic",
    ]),

    getBanner() {
      this.$http.get("http://localhost:3000/banner?type=2").then((d) => {
        this.bannerList = d.data.banners;
        // console.log(d.data.banners);
      });
    },
    getSongDay() {
      this.$http.get("http://localhost:3000/personalized?limit=1").then((d) => {
        this.songDay = d.data.result[0];
        // console.log(this.songDay);
      });
    },
    getRecommendList() {
      this.$http.get("http://localhost:3000/personalized/newsong").then((d) => {
        this.recommendList = d.data.result;
        console.log(this.recommendList);
      });
    },
    setThisMusic(d) {
      this.setCurrentMusic(d);
      console.log(this.$store.state);
      this.setGlobalPlayerIsShow(true);
    },
    toPlayer(d) {
      // 展示页面
      this.setCurrentMusic(d);

      this.setPlayerIsShow(true);
    },
  },
};
</script>
<style lang="scss">
a {
  color: #000;
}
body,
html {
  height: 100%;
}
.find {
  padding-top: 80px;
  padding-bottom: 87px;
}
</style>

<style lang="scss" scoped>
.banner_content img {
  width: 100%;
  display: block;
}
.title {
  display: flex;
  justify-content: space-between;
  p {
    color: #f9595f;
    font: 12px/24px "";
  }
}
.song_day {
  margin-top: 40px;
  height: 75px;
  background: rgb(43, 42, 42);
  border-radius: 0.4rem;
  a {
    display: block;
    padding: 0 15px;
    img {
      width: 75px;
      height: 75px;
      border-radius: 0.4rem;
      margin-top: -15px;
    }
    .song_msg {
      color: #fff;
      margin-top: -40px;
      h5 {
        margin: 10px 0;
        color: #f9595f;
        font-weight: none;
      }
      p {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        font-size: 16px;
        text-overflow: ellipsis;
        margin: 20px 0;
      }
    }
    .play_button {
      display: flex;
      justify-content: center;
      align-items: center;
      .play {
        width: 34px;
        height: 34px;
        background: rgba(255, 255, 255, 0.3);
        color: #fff;
        text-align: center;
        line-height: 34px;
        border-radius: 34px;
      }
    }
  }
}
.song_recommend {
  margin-top: 20px;
  overflow: scroll;
  .recommend_list {
    display: flex;
    width: fit-content;

    li {
      margin: 0 20px;
      background: rgb(243, 241, 241);
      box-shadow: 0 0 5px 1px #ccc;
      border-radius: 0.4rem;
      position: relative;
      img {
        width: 40vw;
        border-radius: 0.4rem 0.4rem 0 0;
      }
      p {
        font: 14px/18px "";
        margin: 3px;
      }
      .song_name {
        font: 12px/16px "";
      }
      .play_button {
        top: 35vw;
        left: 25vw;
      }
    }
  }
}
.song_recommend::-webkit-scrollbar {
  display: none;
}
</style>
