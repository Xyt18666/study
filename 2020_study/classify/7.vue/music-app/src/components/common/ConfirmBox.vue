<template lang="pug">
transition(name="box")
    .conform-box(v-show="$store.state.clearHotIsShow")
        .main 
            p {{msg}}
            .button
                .confirm(
                    @click="$emit('confirm')"
                ) 确认
                .cancel(
                     @click="$emit('cancel')"
                ) 取消

</template>

<script>
export default {
    props: ["msg"],
};
</script>

<style lang="sass">


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




.conform-box
    position: fixed
    top: 0
    left: 0
    bottom: 0
    right: 0
    width: 100%
    height: 100%
    z-index: 900
    background: #000
    .main
        text-align: center
        position: absolute
        left: 50%
        top: 50%
        width: 3rem
        height: 1rem
        font-size: 0.15rem
        margin-top: -1rem
        margin-left: -1.5rem
        border-radius: 5px
        background: #333
        p
            height: 0.6rem
            line-height: 0.6rem

        .button
            display: flex
            border-top: 1px solid #000
            div
                height: 0.4rem
                line-height: 0.4rem
                flex: 1
            div+div
                border-left: 1px solid #000
</style>
