<template lang="pug">
.slide-bar 
    ul
        li(
            v-for="(item,index) in navList"
            :key="index"
            ) 
            router-link(
                :to= "item.url"
            ) {{item.label}}



</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      navList: [
        {
          label: "系统概览",
          url: "/main/overview",
          permissions: "overview"
        },
        {
          label: "设备登记",
          url: "/main/administration",
          permissions: "management"
        },
        {
          label: "设备管理",
          url: "/main/register",
          permissions: "register"
        },
        {
          label: "数据字典",
          url: "/main/dictionaries",
          permissions: "dictionary"
        }
      ]
    };
  },

  computed: {
    ...mapState(["userData", "size"])
    // permissionNavList() {
    //   return this.navList.filter(item => {
    //     return this.userData.permissions.indexOf(item.permissions) > -1;
    //   });
    // }
  },
  created() {
    setTimeout(() => {
      // console.log(this.userData);

      this.navList = this.navList.filter(item => {
        return this.userData.permissions.indexOf(item.permissions) > -1;
      });
    }, 400);
  },
  mounted() {}
};
</script>

<style lang="sass">
.slide-bar
    height: calc(100vh - 60px)
    width: 300px
    background: #ccc
</style>
