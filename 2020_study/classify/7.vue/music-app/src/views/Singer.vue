<template lang="pug">
.singer.wrapper
  ul.content
    li(v-for="(item, index) in singerList", :key="index", ref="songLi")
      h3 {{ item.letter }}
      ol
        li(
          v-for="(item2, index2) in item.items",
          :key="index2",
          @click="toDetaile(item2)"
        )
          .avatar(:style="{ 'background-image': 'url(' + item2.avatar + ')' }")
          .name {{ item2.name }}

  .topZm(v-show="zmShow", ref="topZm") {{ zm }}

  .scrollBar
    .item(v-for="(item, index) in singerList", :key="index", ref="scrollBar") {{ item.letter }}
  transition(enter-active-class="xq", leave-active-class="xqt")
    router-view
</template>

<script>
import SingerDetail from "@/views/SingerDetail.vue";
import Toast from "@/components/common/Toast.js";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      singerList: null,
      bs: null,
      ostArr: [],
      zmShow: false,
      zm: "A",
      scrollIndex: 0,
    };
  },
  mounted() {
    this.bs = new BScroll(".wrapper", {
      probeType: 3,
    });
    this.bs.on("scroll", (position) => {
      let { y } = position;
      //   console.log(-y); //本来是负数

      this.ostArr.map((item, index) => {
        if ((-y >= item && -y < this.ostArr[index + 1]) || -y >= item) {
          //负负的正
          this.scrollIndex = index;
          this.$refs.topZm.style.transform = `translate3d(0,${0}px,0)`;
          //   console.log(index);
        }
        if (item + y > 0 && item + y < 30) {
          let st = -(30 - (item + y));

          this.$refs.topZm.style.transform = `translate3d(0,${st}px,0)`;

          if (st <= -29) {
            this.$refs.topZm.style.transform = `translate3d(0,${0}px,0)`;
          }

          //    0  --> -30
        }
        // console.log(item, y);
      });

      this.resetScrollBar();

      if (position.y <= 0) {
        this.zmShow = true;
      } else {
        this.zmShow = false;
      }

      this.zm = this.singerList[this.scrollIndex]["letter"];

      this.bs.refresh(); //重载  BScroll
    });
  },
  updated() {
    this.$refs.songLi.map((item) => {
      this.ostArr.push(item.offsetTop);
      this.ostArr = [...new Set(this.ostArr)];
      //   console.log(this.ostArr);
    });
  },
  components: {
    SingerDetail,
  },
  methods: {
    resetScrollBar() {
      this.$refs.scrollBar.map((item) => (item.style.color = "#fff"));
      this.$refs.scrollBar[this.scrollIndex].style.color = "red";
    },
    toDetaile(id) {
      console.log(id.id);
      if (id.copyright) {
        this.$router.push({
          name: "SingerDetail",
          params: {
            singerId: id.id,
          },
        });
      } else {
        Toast("无版权");
      }
    },
  },
  created() {
    this.$http.post("singer-list").then(
      (d) => {
        let arr = [];
        let obj = {};
        d.data.forEach((item) => {
          const letter = item.firstLetter;
          if (obj[letter] === undefined) {
            obj[letter] = {
              letter,
              items: [],
            };
          }
          obj[letter].items.push(item);
        });
        for (let key in obj) {
          arr.push(obj[key]);
        }
        arr.sort((a, b) => {
          return a.letter.charCodeAt(0) - b.letter.charCodeAt(0);
        });
        this.singerList = arr;
        console.log(this.singerList);
      },
      (e) => {
        console.log(e, "错误");
      }
    );
  },
};
</script>

<style lang="sass" scoped>

.xq
    animation: xq .5s

.xqt
    animation: xq .5s reverse

@keyframes xq
    0%
        transform: translate3d(100%,0,0)
    100%
        transform: translate3d(0,0,0)


.singer
    height: 6rem
    overflow: hidden
    position: relative

    .topZm
        position: absolute
        top: 0
        width: 100%;
        height: 0.3rem;
        background: linear-gradient(45deg, #061842 0%, #2C50A1 100%);
        font-size: 0.16rem
        line-height: 0.3rem
        color: #fff
        padding-left: 0.2rem

    ul

        li
            h3
                width: 100%;
                height: 0.3rem;
                background: linear-gradient(45deg, #061842 0%, #2C50A1 100%);
                font-size: 0.16rem
                line-height: 0.3rem
                color: #fff
                padding-left: 0.2rem
            ol
                padding: 0.2rem
                li
                    height: 0.65rem
                    display: flex
                    align-items: center
                    .avatar
                        width: 0.5rem
                        height: 0.5rem
                        border-radius: 0.5rem
                        background-size: 0.5rem 0.5rem
                        overflow: hidden
                    .name
                        height: 0.23rem
                        font-size: 0.16rem
                        line-height: 0.23rem
                        margin-left: 0.16rem
                        color: #fff
    .scrollBar
        position: fixed
        right: 0
        top: 50%
        transform: translate(0,-50%)
        background: transparent
        .item
            color: #fff
            opacity: 0.4
            font-size: 0.13rem
            padding: 0.02rem 0.10rem 0rem 0.02rem;
</style>
