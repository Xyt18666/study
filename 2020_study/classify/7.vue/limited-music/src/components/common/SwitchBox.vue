<template lang="pug">
  .onoff(
      :class="{'on':value}"
      @click="$emit('input',!value)"
  )
</template>

<script>
export default {
    model: {
        prop: "val",     // 修改 v-model 默认的 vale变量名
        event: "change", // 修改 v-model 默认的 input 事件
    },
    data() {
        return {};
    },
    props: {
        value: Boolean,
    },
    watch: {
        value(n) {
            console.log(n);
        },
    },
};
</script>

<style lang="sass">

.onoff
    width: 35%
    height: 40px
    background: #fff
    border-radius: 40px
    position: relative

    &:before
        content: ""
        display: block
        position: absolute
        width: 35px
        height: 35px
        border-radius: 35px
        background: red
        top: 2.5px
        left: 2.5px
        transition: left 1.5s

    &.on
        background: #fff

        &:before
            background: #0f0
            left: 68%
            transition: left 1.5s
</style>
