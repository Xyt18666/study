<template lang="pug">
transition(name="box")
    .conform-box(v-show="isS")
        .main 我是弹框

</template>

<script>
export default {
    props: ["isS"],
};
</script>

<style lang="sass">
// .box-enter
//     opacity: 0
// .box-leave-to
//     opacity: 0

// .box-enter-active
//     transition: all 3s
// .box-leave-active
//     transition: all 3s

.box-enter-active
    animation: boxInter 0.3s
    .main
        animation: man 0.3s
.box-leave-active
    animation: boxInter 0.3s reverse
    .main
        animation: man 0.3s reverse

@keyframes boxInter
    0%
        opacity: 0.5
    100%
        opacity: 1


@keyframes man
    0%
        transform: scale(0);
    50%
        transform: scale(1.5);
    100%
        transform: scale(1);





// .bounce-enter-active
//     animation: bounce-in .5s;

// .bounce-leave-active
//     animation: bounce-in .5s reverse;

// @keyframes bounce-in
//   0%
//     transform: scale(0);
//   50%
//     transform: scale(1.5);
//   100%
//     transform: scale(1);



.conform-box
    position: fixed
    top: 0
    left: 0
    bottom: 0
    right: 0
    width: 100%
    height: 100%
    z-index: 900
    background: rgba(0,0,0,0.7)
    .main
        position: absolute
        left: 50%
        top: 50%

        width: 120px
        height: 40px
        background: #777
        color: #999
        transform:translate(-50%,-50%)
</style>
