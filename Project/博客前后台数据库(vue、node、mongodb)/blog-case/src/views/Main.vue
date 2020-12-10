<template>
  <el-container>
    <el-header>
      <HeaderContent />
    </el-header>

    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <FooterContent />
    </el-footer>
  </el-container>
</template>

<script>
import HeaderContent from "@/components/HeaderContent";
import FooterContent from "@/components/FooterContent";

export default {
  components: {
    HeaderContent,
    FooterContent,
  },
  data() {
    return {};
  },
  created() {
    // this.$http.post("http://localhost:8088/creat").then(d => {
    //     console.log(d);
    // });
    console.log(this.$route.params);

    console.log(new Date().toLocaleDateString());

    this.$http.post("http://localhost:8088/getmainlist").then((d) => {
      console.log(d);
      this.$store.commit("setHomeList", d.data.data);

      this.$store.commit("setMainList", d.data.data);
      console.log(this.$store.state);
    });

    /*
      进入页面请求 首页未登录的列表 ，储存到vuex ，home组件 拿到 vuex 并渲染


      登陆 请求数据 ，返回数据 ，储存到vuex 
        头部遍历 导航列表
        点击切换 切换路由
      
      
      */
    // this.getMsg();

 

 
  },

  methods: {
    // getMsg() {
    //     console.log(this.$route.params.data);
    //     this.$http.post("http://localhost:8088/getmsg", this.$route.params.data).then(d => {
    //         console.log(d);
    //     });
    // },
   
  },
  mounted() {},
};
</script>

<style lang="sass">
body
  background: #ccc
.el-header,.el-footer,.el-main
  padding: 0 !important
  height: auto !important
.el-main
  width: 960px
  height: auto !important
  margin: 0 auto
</style>
