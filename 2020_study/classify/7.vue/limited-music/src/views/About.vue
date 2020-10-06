<template lang="pug">
.about
  h1 This is an about page
  min-player
  confirm-box(
    v-model="visible",
    :a="'是否关闭'",
    b="取消",
    :c="'确定'",
    @quxiao="quxiaof",
    @queren="querenf"
  )
    h2 确认删除吗？
    h3 {{ visible }} +++ "无法访问定义组件的作用域"
  .boxs(@click="visible = !visible") 弹框

  switch-box(:value="val", @input="val = $event")
  //两种相同
  switch-box(v-model="val")
  keep-alive
    test-box(v-if="isRander")

  p(@click="isRander = !isRander") 渲染与销毁

  base-layout
    p 身体内容
    template(#header)
      p 头
    template(#footer)
      p 脚

  child-components
  button(@click="n++") 父组件 {{ n }}

  |
  |
  parent-com(:foo="foo", :coo="coo", v-on:upRocket="reciveRocket")
  next-tick
  p -------------------------------------------
  a(href="/#/about/a") aa
  a(href="/#/about/b") bb

  c-a(v-if="hashValue === 'a'")
  c-b(v-if="hashValue === 'b'")
  button(@click="toHomue") 回首页
</template>

<script>
import MinPlayer from "@/components/MinPlayer.vue";
import TestBox from "@/components/TestBox.vue";
import ChildComponents from "@/components/ChildComponents.vue";
import minxina from "@/mixins/life-cycle.js";

import ParentCom from "@/components/ParentComponent.vue";
import NextTick from "@/components/NextTick.vue";

import CA from "@/components/CA.vue";
import CB from "@/components/CB.vue";

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
      hashValue: "",
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
    toHomue() {
      console.log(this.$router); // 他就是 整个 router 实例
      this.$router.push("/"); // 切换路径 hash值 ，切换组件
      // this.$router.go(1) 前进
      // this.$router.go(-1)  后退
      // this.$router.replace("/") 替换到某个 组件 ，不存在历史记录 ，不能返回上一页
      //   router-link  标签添加  replace属性 等同于  $router.replace

      //  动态路径 在定义路由时  前面 加 :
      //  this.$route.params.xx参数  当前页面的匹配路由  ，获取值
    },
  },
  components: {
    MinPlayer,
    ChildComponents,
    TestBox,
    ParentCom,
    NextTick,
    CA,
    CB,
  },
  provide() {
    return {
      userName: "bruce",
    };
  },
  mounted() {
    window.onhashchange = () => {
      console.log(location.hash);
      let strIndex = location.hash.lastIndexOf("/");
      let hashString = location.hash.substr(strIndex + 1);
      // this.hashValue = hashString;
      console.log(hashString);
      this.hashValue = hashString;
    };
  },
};
</script>

<style lang="sass"></style>
