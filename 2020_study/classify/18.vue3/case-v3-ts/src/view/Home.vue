<template>
    <div class="home_content">
        <h1>home</h1>
        <p>数字{{ state.num }}</p>
        <p @click="setNum(123)">修改</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
    setup() {
        let state = reactive({
            num: 0,
            arr: [1, "p8", 52],
            obj: { a: "AA", b: "bb" },
        });

        function setNum(e) {
            state.num = e;
        }

        return { state, setNum };
    },
});
</script>

<style></style>
