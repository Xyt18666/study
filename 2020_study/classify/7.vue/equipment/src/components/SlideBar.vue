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
export default {
  data() {
    return {
      navList: [
        {
          label: "系统概览",
          url: "/main/overview"
        },
        {
          label: "设备登记",
          url: "/main/administration"
        },
        {
          label: "设备管理",
          url: "/main/register"
        },
        {
          label: "数据字典",
          url: "/main/dictionaries"
        }
      ]
    };
  }
};
</script>

<style lang="sass">
.slide-bar
    height: calc(100vh - 60px)
    width: 300px
    background: #ccc
</style>
