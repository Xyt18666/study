<template lang="pug">
transition(name="box")
    .content(
        v-show="show"
    ) 我是内容   

</template>

<script>
export default {
    props: ["show"],
};
</script>

<style lang="sass" scoped>

.box-enter-active
    // animation: boxInter 1s
    animation: boxRTL 1s


.box-leave-active
    // animation: boxInter 1s reverse
    animation: boxLTR 1s


@keyframes boxInter
    0%
        top: -100%
    100%
        top: 0

@keyframes boxRTL
    0%
        left: -100%
    100%
        left: 0

@keyframes boxLTR
    0%
        left: 0
    100%
        left: 100%


.content
    width: 100%
    height: 50px
    position: fixed
    top: 0
    left: 0
    background: #0f0
</style>
