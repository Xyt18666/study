<template>
    <div class="content">
        <h1>vue文件</h1>
        <p>{{ key }}</p>
        <Home @toFa="fn"></Home>
    </div>
</template>
<script>
import Home from "@/views/Home.vue";
export default {
    components: { Home },
    data() {
        return {
            key: "val",
        };
    },
    methods: {
        fn() {
            let k = "1998";
            console.log(k);

            console.log("触发子向父");
        },
    },
};
</script>

<style>
h1 {
    background: #777;
}
</style>
