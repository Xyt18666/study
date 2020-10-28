<template lang="pug">
.top-header 
    h2 设备管理
    h2(@mouseover="show=true"  @mouseout="show=false" ) 用户名:{{name}} 
        ul(v-show="show")
            li 修改密码
            li(@click="logOut") 退出
 
</template>

<script>
export default {
  data() {
    return {
      name: "亚坤",
      show: false
    };
  },
  methods: {
    who() {
      this.$http.post("equipment/who").then(res => {
        console.log(res);
        if (res.data.code !== 0) {
          this.$router.push({
            name: "Login"
          });
        }
      });
    },
    logOut() {
      this.$http.post("equipment/logout").then(res => {
        this.$router.push({
          name: "Login"
        });
        console.log(res);
      });
    }
  },
  created() {
    this.who();
  }
};
</script>

<style lang="sass">
.top-header
    display: flex
    justify-content: space-between
    height: 60px
    background: #0079c4
    color: #fff
    font: bold 18px/60px ""
    padding-left: 30px
    h2
        margin: 0
        position: relative
        ul

            top: 30px
            width: 200px
            position: absolute
            background: #0f0
</style>
