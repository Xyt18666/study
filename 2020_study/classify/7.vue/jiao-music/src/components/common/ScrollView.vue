<template lang="pug">
.scroll-view-container(ref="container")
    .scroll-view-content
        slot
</template>

<script>
import BetterScroll from 'better-scroll';

export default {
    data() {
        return {
            scroll: null
        }
    },
    props: {
        scrollData: null,
        probeType: {
            type: Number,
            default: 0
        }
    },
    mounted() {
        this.init();
    },
    beforeDestroy() {
        if (this.scroll) {
            this.scroll.destroy();
            this.scroll = null;
        }
    },
    watch: {
        scrollData() {
            this.refresh();
        }
    },
    methods: {
        init() {
            this.$nextTick(() => {
                this.scroll = new BetterScroll(this.$refs.container, {
                    click: true,
                    probeType: this.probeType
                });
                if (this.probeType) {
                    this.scroll.on('scroll', p => {
                        this.$emit('scroll', p);
                    });
                }
            });
        },
        refresh() {
            this.$nextTick(() => {
                this.scroll && this.scroll.refresh();
            });
        },
        scrollToElement() {
            this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
        },
        scrollTo() {
            this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
        }
    }
};
</script>

<style lang="sass" scoped>
.scroll-view-container
    height: 100%
    overflow: hidden
    .scroll-view-content
        min-height: 101%
</style>
