<template>
    <div class="list">
        <h1>lists{{ $route.params.type }}</h1>

        <h3 @click="tuInOut(1)">国内</h3>
        <h3 @click="tuInOut(2)">国外</h3>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods: {
        tuInOut(d) {
            this.$router.push({
                name: "XiwenListIn",
                params: { id: d == 1 ? "in" : "out" },
            });
        },
    },
    mounted() {
        console.log("??");
    },
};
</script>

<style></style>
