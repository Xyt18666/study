<template lang="pug">
    .child-component
        p(@click="getParent") 子组件
</template>

<script>
export default {
    data() {
        return {
            age: 18,
        };
    },
    methods: {
        getParent() {
            console.log(this.$parent);
            console.log(this.$parent.name, this.$parent.getMoy("500"));
            console.log(this.$root);
        },
    },
    created() {
        window.eventBus.$on("qwe", val => {
            console.log(val);
        });
    },
};
</script>

<style lang="sass" scoped>
.child-component
    width: 100px
    height: 100px
    background: #0f0
</style>
