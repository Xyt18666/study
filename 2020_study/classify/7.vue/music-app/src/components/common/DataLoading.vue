<template lang="pug">
  .data-loading
    .loading
</template>

<script>
export default {};
</script>

<style lang="sass">
.data-loading
    position: fixed
    z-index: 999
    width: 100%
    height: 100%
    top: 0
    left: 0
    display: flex
    justify-content: center
    align-items: center
    .loading
        width: 0.3rem
        height: 0.3rem
        border-radius: 0.3rem
        border: 0.03rem solid rgba(255,255,255,0.6)
        border-top: 0.03rem solid #fff
        animation: 8s linear loading infinite

@keyframes loading
    0%
        transform: rotate(0deg)
    100%
        transform: rotate(3600deg)
</style>
