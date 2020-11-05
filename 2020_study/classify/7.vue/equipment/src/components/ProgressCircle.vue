<template lang="pug">
.progress-circle-container
    svg(:width="radius", :height="radius", viewBox="0 0 100 100")
        circle.bg(
            r="50",
            cx="50",
            cy="50",
            fill="transparent"
        )
        circle.bar(
            r="50",
            cx="50",
            cy="50",
            fill="transparent",
            :stroke-dasharray="dashArray",
            :stroke-dashoffset="dashOffset"
        )
    slot
</template>

<script>
export default {
    data() {
        return {
            dashArray: Math.PI * 100
        }
    },
    props: {
        radius: {
            type: Number,
            default: 50
        },
        percent: {
            type: Number,
            default: 0
        }
    },
    computed: {
        dashOffset() {
            return (1 - this.percent / 100) * this.dashArray;
        }
    }
};
</script>

<style lang="sass" scoped>
.progress-circle-container
    position: relative
    circle
        stroke-width: 8px
        transform-origin: center
        &.bg
            transform: scale(.9)
            stroke: rgba(255, 255, 255, .2)
        &.bar
            transform: scale(.9) rotate(-90deg)
            stroke: #fff
    & > div
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
</style>
