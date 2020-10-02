<template lang="pug">
    .parent-component
        p(
            @click="getSon"
            ref="pp"
        ) 父组件
        son(ref="soncomponent")

        p(@click="getcli") getChi

        p(@click="bus") bus总线
</template>

<script>
import Son from "@/components/SonComponent.vue";

export default {
    data() {
        return {
            name: "鹿丸",
        };
    },
    components: { Son },
    methods: {
        getSon() {
            console.log(this.$children);
        },
        getMoy(size) {
            console.log("给儿子钱" + size + "圆");
        },
        getcli() {
            console.log(this.$refs.pp);
            console.log(this.$refs.soncomponent);
        },
        bus() {
            window.eventBus.$emit("qwe", "数据");
        },
    },
    created() {},
    mounted() {},
};
</script>

<style lang="sass" scoped>
.parent-component
    width: 200px
    height: 200px
    background: pink
</style>
