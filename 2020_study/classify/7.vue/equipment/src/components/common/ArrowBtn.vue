<template lang="pug">
.arrow-btn-container
    .arrow-btn(:class="[arrowType]")
</template>

<script>
export default {
    props: {
        arrowType: {
            type: String,
            default: 'left' // left, right, up, down
        }
    }
}
</script>

<style lang="sass" scoped>
.arrow-btn-container
    position: relative
    width: 50px
    height: 50px
    .arrow-btn
        position: absolute
        top: 50%
        left: 50%
        margin: -8px 0 0 -8px
        width: 16px
        height: 16px
        border: 3px solid #fff
        border-width: 0 0 3px 3px
        border-radius: 1px
        &.left
            transform: rotate(45deg)
        &.down
            transform: rotate(-45deg)
</style>
