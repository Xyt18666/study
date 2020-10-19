<template lang="pug">
.home 
  .search
    .search-box
      input(placeholder="请输入内容搜索")
    p 搜索

    //- banner-box
  ul
    li(v-for="(item, index) in list", :key="index")
      img(:src="item.pic")
      p {{ item.text }}
  .hot
    .hot-top
      h3 热销品类
      p 全部
      ul
        li(
          v-for="(item, index) in list" 
          :key="index"
          @click="toMsg(item.id)"
         
          )
          img(:src="item.pic")
          p {{item.price}}
</template>

<script>
import { mapState, mapMutations } from "vuex";
// import MiniMusicPlayer from "@/components/MiniMusicPlayer.vue";

export default {
  components: {},
  props: [],
  data() {
    return {
      // list: [
      //   {
      //     id: 1,
      //     pic: "../assets/data/1.png",
      //     price: 20,
      //     text: "店长",
      //     count: 1,
      //   },
      //   {
      //     id: 2,
      //     pic: "../assets/data/2.png",
      //     price: 20,
      //     count: 1,
      //     text: "咖啡",
      //   },
      //   {
      //     id: 3,
      //     pic: "../assets/data/1.png",
      //     price: 30,
      //     count: 1,
      //     text: "奶茶",
      //   },
      //   {
      //     id: 4,
      //     pic: "../assets/data/2.png",
      //     price: 40,
      //     count: 1,
      //     text: "其他",
      //   },
      // ],
    };
  },

  mounted() {},

  update() {},
  methods: {
    toMsg(id) {
      this.$router.push({
        name: "Msg",
        params: {
          id: id,
        },
      });
      this.setIsBlock(true);
    },
    ...mapMutations(["setIsBlock"]),
  },
  created() {
    // this.$http.post("").then(
    //   (d) => {
    //     this.hotSearch = d.data;
    //     // console.log(d.data);
    //   },
    //   (e) => {
    //     console.log(e, "错误");
    //   }
    // );
  },

  computed: {
    ...mapState(["list"]),
  },
  watch: {},
};

/*






*/
</script>
<style lang="sass" scoped>
.home
  width: 90vw
  margin: 0 auto
  .search
    width: 90vw
    position: fixed
    top: 0
    display: flex
    align-items: center
    .search-box
      flex: 8
      height: 20px
      border-radius: 20px
      background: rgba(0,0,0,0.5)
      input
        border: none
        outline: none
        background: rgba(0,0 ,0 ,0 )
        color: #fff
      p
        flex: 2
  ul
    display: flex
</style>
