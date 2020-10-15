<template lang="pug">
.playing-icon-container
    .playing-icon(v-for="i in 3", :key="i")
</template>

<style lang="sass">
.playing-icon-container
    position: relative
    width: 10px
    height: 10px
    opacity: .6
    div
        content: ''
        position: absolute
        bottom: 0
        width: 2px
        height: 10px
        background: #fff
        transform-origin: 0 100%
        animation: playing .15s ease infinite alternate
        &:nth-child(1)
            left: 0px
            animation-delay: .1s
        &:nth-child(2)
            left: 4px
            animation-delay: .2s
        &:nth-child(3)
            left: 8px
            animation-delay: .3s

@keyframes playing
    0%
        transform: scaleY(0.6)
    100%
        transform: scaleY(1.1)
</style>
