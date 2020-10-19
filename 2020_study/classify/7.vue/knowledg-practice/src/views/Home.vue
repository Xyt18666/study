<template lang="pug">
.home
  hello-world
  bao-dan
  san
  dong
  //- transition(name="qq")
  ZuJianDong(
    :show="show"
  )
  p(@click="show=!show") 修改 show
</template>

<script>
import HelloWorld from "@/components/2.class和style绑定.vue";
import BaoDan from "@/components/3.表单绑定.vue";
import San from "@/components/4.属性计算和监听器.vue";
import Dong from "@/components/6.vue动画.vue";
import ZuJianDong from "@/components/6.组件动画.vue";

export default {
    data() {
        return {
            show: false,
        };
    },
    name: "Home",
    components: {
        HelloWorld,
        BaoDan,
        San,
        Dong,
        ZuJianDong,
    },
};
</script>
<style lang="sass" scoped>
// .qq-enter,.qq-leave-to
//     top: -100%
// .qq-enter-active,.qq-leave-active
//     transition: 1s
</style>
