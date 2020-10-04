<template lang="pug">
li
  .itemWrap(
    ref="tachbox",
    @touchstart="start",
    @touchmove="move",
    @touchend="end",
    :style="{ transform: `translate(${dis}px,0)` }"
  )
    .itemContent
      p {{ masgitem.contenttext }}
      time {{ masgitem.time }}
    .funWrap
      .removeMasg(@click="$emit('removeitem', masgitem.time)") 删除
      .lickMasg(:class="[masgitem.lick ? 'lick' : '']", @click="ilick") 喜欢
</template>

<script>
export default {
  data() {
    return {
      startx: 0,
      movex: 0,
      dis: 0,
      endx: 0,
    };
  },
  props: ["masgitem"],
  methods: {
    start(e) {
      this.startx = e.touches[0].clientX;
    },
    move(e) {
      this.movex = e.touches[0].clientX;
      this.dis = this.movex - this.startx;
      this.dis = this.dis >= 0 ? 0 : this.dis <= -200 ? -200 : this.dis;
    },
    end() {
      if (this.dis < -50) {
        let dsq = setInterval(() => {
          this.dis = this.dis <= -200 ? -200 : --this.dis;
          if (this.dis <= -200) {
            clearInterval(dsq);
          }
        }, 1);
      } else {
        let dsq = setInterval(() => {
          this.dis = this.dis >= 0 ? 0 : ++this.dis;
          if (this.dis >= 0) {
            clearInterval(dsq);
          }
          console.log(11);
        }, 5);
      }
    },
    ilick() {
      this.$emit("likeitem", this.masgitem);
    },
  },
  computed: {},
  components: {},
  mounted() {},
};
</script>

<style scoped lang="sass">

li
    width: 100%
    overflow: hidden
    list-style: none
    .itemWrap
        width: calc(100% + 200px)
        // transform: translate(-200px,0)
        display: flex
        justify-content: space-between
        align-items: center
        border-bottom: 2px solid #0f0
        .itemContent
            width: 100%
            background: #ccc
            padding: 5px 20px
            box-sizing: border-box
            p
                font: 400 20px/30px ""
            time
                color: red
                font: 12px/16px ""
        .funWrap
            width: 200px
            display: flex
            div
                width: 100px
                height: 95px
                text-align: center
                font: 26px/95px ""
            .removeMasg
                background: red
            .lickMasg
                background: pink
                &.lick
                    background: #777
</style>
