<template>
    <div class="day">
        <h1>Day.js</h1>
        <p>时间{{ time }}</p>
    </div>
</template>

<script>
export default {
    name: "Day",
    props: {},
    data() {
        return {
            time: this.$dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss"),
        };
    },

    methods: {},
    mounted() {},
};
</script>

<style scoped lang="scss"></style>
