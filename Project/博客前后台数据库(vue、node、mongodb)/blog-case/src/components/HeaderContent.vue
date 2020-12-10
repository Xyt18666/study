<template>
  <div class="header_content">
    <el-row>
      <el-col :span="24" class="banner">
        <img src="../../public/images/banner.png" alt="" />
      </el-col>
      <el-col :span="24" class="nav">
        <el-row class="nav_content">
          <el-link @click="toIndex">首页</el-link>
          <el-link
            v-for="(d, i) in $store.state.allData"
            :key="i"
            @click="toMain(i, d)"
          >
            {{ i }}
          </el-link>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  created() {},
  watch: {
    $route: "routerCheck",
    // $store: "resetNav",
  },
  methods: {
    // resetNav() {
    //   this.$forceUpdate();
    // },
    routerCheck() {
      //   console.log(
      //     "路由切换触发",
      //     this.$route,
      //     this.$route.params.id,
      //     this.$store.state.allData[this.$route.params.id]
      //   );
      if (this.$route.path == "/home") {
        this.$store.commit("setIsPage", true);
        this.$store.commit("setMainList", this.$store.state.homeList);
        this.$store.commit("setSection", null);
      } else {
        this.$store.commit("setIsPage", false);
        this.$store.commit(
          "setMainList",
          this.$store.state.allData[this.$route.params.id]
        );

        this.$store.commit("setSection", this.$route.params.id);
      }
    },
    toIndex() {
      this.$store.commit("setIsPage", true);
      this.$store.commit("setMainList", this.$store.state.homeList);
      this.$router.push({
        name: "home",
        params: {},
      });
    },
    toMain(i, data) {
      //   this.$store.commit("setIsPage", false);
      //   this.$store.commit("setMainList", data);
      //   console.log(i, data);

      //   this.$store.commit("setSection", i);

      this.$router.push({
        name: "home",
        params: {
          id: i,
          length: data.length,
        },
      });

      // 切换分页数据
    },
  },
};
</script>

<style lang="sass">

.banner
  img
    width: 100%

.nav
  background: #fff

  float: none !important
  .nav_content
    width: 960px !important
    margin: 0 auto !important
    display: flex
    height: 50px
    justify-content: space-between
</style>
