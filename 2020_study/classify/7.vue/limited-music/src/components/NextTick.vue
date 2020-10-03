<template>
    <section>
        <h1 ref="hello">{{ value }}</h1>
        <button type="danger" @click="get">点击</button>
    </section>
</template>
<script>
export default {
    data() {
        return {
            value: "Hello World ~",
        };
    },
    methods: {
        get() {
            this.value = "你好啊";
            console.log(this.$refs["hello"].innerText); //Hello World ~
            this.$nextTick(() => {
                console.log(this.$refs["hello"].innerText); //你好啊
            });
        },
    },
    mounted() {},
    created() {},
};
</script>
