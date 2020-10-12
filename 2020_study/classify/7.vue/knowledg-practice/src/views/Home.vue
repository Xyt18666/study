<template lang="pug">
.home
  hello-world
  bao-dan
  san
  dong
</template>

<script>
import HelloWorld from "@/components/2.class和style绑定.vue";
import BaoDan from "@/components/3.表单绑定.vue";
import San from "@/components/4.属性计算和监听器.vue";
import Dong from "@/components/6.vue动画.vue";


export default {
    name: "Home",
    components: {
        HelloWorld,
        BaoDan,
        San,
        Dong
    },
};
</script>
