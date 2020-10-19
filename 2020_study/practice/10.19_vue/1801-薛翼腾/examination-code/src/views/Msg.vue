<template lang="pug">
transition
    .msg-box(
        v-show="isBlock"
    )
        .back(
            @click="$router.go(-1)"
        ) 返回
        .gwc(
            @click="toGwc"
        ) 我的购物车
        img(
            :src="item.pic"
        )
        .name 草莓
        .content
            .pic {{item.price}}
            | ---
            .size {{item.count}}
        .bottom
            p(
                @click="pushStor"
            ) 加入购物车
        .stort(
            v-show="isShowSTort"
        )
            .con
                img(src="#")
                p {{item.price}}
                p(
                    @click="sendStort"
                ) 确定
        
        tip-box(v-show="ishow")  
</template>

<script>
import { mapState, mapMutations } from "vuex";
import TipBox from "@/components/TipBox.vue";

export default {
  components: {
    TipBox,
  },
  data() {
    return {
      item: null,
      ishow: false,
    };
  },
  computed: {
    ...mapState(["list", "isBlock", "isShowSTort"]),
  },
  mounted() {
    console.log(this.$route.params.id);
    this.list.map((item) => {
      if (item.id == this.$route.params.id) {
        this.item = item;
        console.log(this.item);
      }
    });
  },
  methods: {
    ...mapMutations(["setIsShowSTort", "pushStortItem"]),
    pushStor() {
      this.setIsShowSTort(true);
      this.pushStortItem(this.item);
      console.log(22);
    },
    sendStort() {
      this.ishow = true;
      setTimeout(() => {
        this.ishow = false;
        this.setIsShowSTort(false);
      }, 500);
    },
    toGwc() {
      this.$router.push({
        name: "MyGwc",
      });
    },
  },
};
</script>

<style lang="sass" scoped>
.v-enter,.v-leave-to
    left: 100%

.v-enter-active,.v-leave-active
    transition: 2s


.msg-box
    position: fixed
    background: #fff
    width: 100vw
    height: 100vh
    left: 0
    top: 0
    .content
        height: 50px

    .bottom
        margin-top: 50px
        p
            color: #000
    .stort
        position: fixed
        top: 0
        width: 100%
        height: 100%
        background: rgba(0,0,0,0.5)
        .con
            background: #fff
            margin-top: 50px
</style>
