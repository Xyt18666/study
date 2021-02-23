<template>
    <div class="home">
        <h1>home</h1>
        <div id="container"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from "vue";

export default defineComponent({
    setup() {
        const { ...obj } = getCurrentInstance();

        // console.log(obj);
    },
    methods: {
        init() {
            var map = new globalThis.AMap.Map("container");
            globalThis.map = map;
        },
    },
    mounted() {
        this.init();
    },
});
</script>

<style lang="scss">
h1 {
    color: red;
}
#container {
    height: 300px;
}
</style>
