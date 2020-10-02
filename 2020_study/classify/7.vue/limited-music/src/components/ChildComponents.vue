<template lang="pug">
    .child-component
        button(@click="n++") 子组件 {{ n }}
</template>

<script>
import minxina from "@/mixins/life-cycle.js";

export default {
    name: "child-component",
    color: "red", //自定义属性
    mixins: [minxina],
    data() {
        return {};
    },
};
</script>

<style lang="sass" scoped></style>
