<template lang="pug">
    p(@click="size++") {{size}}
</template>

<script>
import minxina from "@/mixins/life-cycle.js";
export default {
    data() {
        return { size: 0 };
    },
    minxins: [minxina],
    activated() {
        console.group("------激活------");
    },
    deactivated() {
        console.group("------停用------");
    },
};
</script>

<style></style>
