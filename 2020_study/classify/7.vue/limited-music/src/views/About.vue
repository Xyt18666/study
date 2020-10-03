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
    keep-alive
        test-box(v-if="isRander")

    p(@click="isRander=!isRander") 渲染与销毁

    base-layout
        
        p 身体内容
        template(#header)
            p 头
        template(#footer)
            p 脚
    
    |
    |
    child-components
    button(@click="n++") 父组件 {{ n }}

    |
    |
    parent-com(
        :foo="foo"
        :coo="coo"
        v-on:upRocket="reciveRocket"
        )
    next-tick
</template>

<script>
import MinPlayer from "@/components/MinPlayer.vue";
import TestBox from "@/components/TestBox.vue";
import ChildComponents from "@/components/ChildComponents.vue";
import minxina from "@/mixins/life-cycle.js";

import ParentCom from "@/components/ParentComponent.vue";
import NextTick from "@/components/NextTick.vue";

export default {
    name: "parent",
    color: "#0f0",

    data() {
        return {
            visible: false,
            val: false,
            isRander: true,
            size: 10,
            foo: "Hello, world",
            coo: "Hello,rui",
        };
    },
    ok() {
        console.log("自定义方法");
    },
    mixins: [minxina],
    methods: {
        quxiaof() {
            console.log("取消");
        },
        querenf() {
            console.log("确认");
        },
        reciveRocket(d) {
            console.log("11111", d);
        },
    },
    components: {
        MinPlayer,
        ChildComponents,
        TestBox,
        ParentCom,
        NextTick,
    },
    provide() {
        return {
            userName: "bruce",
        };
    },
};
</script>

<style lang="sass"></style>
