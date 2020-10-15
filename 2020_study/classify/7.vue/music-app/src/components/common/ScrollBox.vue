<template lang="pug">
.scroll-box
    .content
        slot

</template>

<script>
import BScroll from "better-scroll";

export default {
    data() {
        return {
            bs: null,
        };
    },
    methods: {
        refresh() {
            this.bs.refresh();
        },
    },
    mounted() {
        this.bs = new BScroll(".scroll-box", {
            probeType: 3,
            click: true,
        });
        console.log(this.bs);

        this.bs.on("scroll", position => {
            // console.log(position.x, position.y);
            this.$emit("getScrollSize", position.y);
        });
    },
    beforeDestroy() {
        if (this.bs) {
            this.bs.destroy();


            this.bs = null;
            }
    },
};
</script>

<style lang="sass">
.scroll-box
    height: 7rem
    overflow: hidden
</style>
