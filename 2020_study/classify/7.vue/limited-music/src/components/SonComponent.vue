<template lang="pug">
    .child-component
        p(@click="getParent") 子组件
        button(@click="startUpRocket") 我要发射火箭
        p coo:{{coo}}
        p name{{ck}}
        p 跨组件 传值 {{userName}}
</template>

<script>
export default {
    data() {
        return {
            age: 18,
        };
    },
    props: ["coo", "ck"],
    methods: {
        getParent() {
            console.log(this.$parent);
            console.log(this.$parent.name, this.$parent.getMoy("500"));
            console.log(this.$root);
        },
        startUpRocket() {
            this.$emit("upRocket", "son to yy");
            console.log("startUpRocket");
        },
    },
    inject: ["userName"],
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
