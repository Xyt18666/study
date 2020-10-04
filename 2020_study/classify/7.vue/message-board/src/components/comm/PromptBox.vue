<template lang="pug">
    .PromptBox
        p 是否要删除？
        .prmWrap
            p(
                @click="$emit('yes')"
            ) 确认
            p(
                @click="$emit('no')"
            ) 取消

</template>

<script>
export default {
    data() {
        return {};
    },
    props: [],
    methods: {},
    mounted() {},
};
</script>

<style scoped lang="sass">
.PromptBox
    color: #fff
    position: fixed
    width: 100vw
    height: 100vh
    top: 0
    left: 0
    background: rgba(0,0,0,0.8)
    .prmWrap
        p
            background: #000
</style>
