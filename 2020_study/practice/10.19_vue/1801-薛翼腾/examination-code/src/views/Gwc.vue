<template lang="pug">
  .gwc 
    ul
        li(
            v-for="item,index in stort"
            :key="index"
        ) {{item}}
            p {{ item.count}}
            p {{ item.price}}
            p 总价 {{item.count *  item.price}}
            p 增加
            p 减少

    
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["stort"]),
  },
  watch: {},
};
</script>

<style lang="sass"></style>
