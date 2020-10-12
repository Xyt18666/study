<template lang="pug">

.header-content
    .logo
    p Limited Music



</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

    
.header-content
    width: 100vw
    display: flex
    justify-content: center
    align-items: center
    height: 0.6rem
    .logo
        width: 0.3rem
        height: 0.3rem
        background-image: url(~@/assets/images/icon-logo.png)
        background-size: cover
        margin-right: 0.07rem
    p
        color: #fff
        font-size: 0.16rem
        text-align: center
        text-transform: uppercase
        font-weight: 600
</style>
