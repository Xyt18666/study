<template lang="pug">
.data-loading-container
    .mask
    .wrapper(:style="style")
        span
            svg(viewBox="25 25 50 50")
                circle(cx="50" cy="50" r="20" fill="none")
</template>

<script>
export default {
    props: {
        size: {
            type: [String, Number],
            default: 30
        }
    },

    computed: {
        style () {
            return this.size ? {
                width: this.size + 'px',
                height: this.size + 'px'
            } : {};
        }
    }
};
</script>

<style lang="sass">
.data-loading-container
    .mask
        display: none
    .wrapper
        position: relative
        width: 30px
        height: 30px
        margin: 0 auto
        font-size: 0
        line-height: 0
        vertical-align: middle

    span
        display: inline-block
        box-sizing: border-box
        position: relative
        width: 100%
        height: 100%
        animation: lm-rotate 0.8s linear infinite

        svg
            width: 100%
            height: 100%
            circle
                stroke: #4680bc
                stroke-width: 3
                stroke-linecap: round
                animation: lm-circular 1.5s ease-in-out infinite
@keyframes lm-rotate
    from
        transform: rotate(0deg)
    to
        transform: rotate(360deg)
@keyframes lm-circular
    0%
        stroke-dasharray: 1, 200
        stroke-dashoffset: 0
    50%
        stroke-dasharray: 90, 150
        stroke-dashoffset: -40
    100%
        stroke-dasharray: 90, 150
        stroke-dashoffset: -120
</style>
