<template>
    <div class="home">
        <Echarts />
        <Day />
        <BetterScroll />
    </div>
</template>

<script>
import Echarts from "@/components/Echarts.vue";
import Day from "@/components/Day.vue";
import BetterScroll from "@/components/BetterScroll.vue";

export default {
    name: "Home",
    components: {
        Echarts,
        Day,
        BetterScroll,
    },
};
</script>
