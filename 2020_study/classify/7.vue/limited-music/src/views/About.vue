<template lang="pug">
  .about
    h1 This is an about page
    min-player
    confirm-box(
        v-model="visible"
        :a="'是否关闭'"
        b="取消"
        :c="'确定'"
        @quxiao="quxiaof"
        @queren="querenf"
       
        )
        h2 确认删除吗？
        h3 {{ visible }} +++  "无法访问定义组件的作用域" 
    .boxs(@click="visible=!visible") 弹框

    switch-box(
        :value="val" 
        @input="val=$event"
    )
    //两种相同
    switch-box(
       v-model="val"
    )

    base-layout
        
        p 身体内容
        template(#header)
            p 头
        template(#footer)
            p 脚
</template>

<script>
import MinPlayer from "@/components/MinPlayer.vue";
export default {
    data() {
        return { visible: false, val: false };
    },
    methods: {
        quxiaof() {
            console.log("取消");
        },
        querenf() {
            console.log("确认");
        },
    },
    components: {
        MinPlayer,
    },
};
</script>

<style lang="sass"></style>
