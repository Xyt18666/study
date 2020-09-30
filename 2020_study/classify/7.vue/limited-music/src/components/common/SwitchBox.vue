<template lang="pug">
  .onoff(
      :class="{'on':value}"
      @click="$emit('input',!value)"
  )
</template>

<script>
export default {
    data() {
        return {};
    },
    props: ["value"],
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

        &.on:before
            background: #0f0
            left: 68%
            transition: left 1.5s
</style>
