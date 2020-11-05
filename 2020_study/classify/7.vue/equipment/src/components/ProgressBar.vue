<template lang="pug">
.progress-bar-container(ref="container", @click="onClick")
    .progress-bar(:style="{ 'width': localPercent + '%' }")
    .progress-btn(
        @touchstart.prevent.stop="onTouchStart",
        @touchmove.prevent.stop="onTouchMove",
        @touchend.prevent.stop="onTouchEnd"
        @touchcancel="isDraging = false",
        :style="{ 'left': localPercent + '%' }"
    )
</template>

<script>
const range = val => Math.min(100, Math.max(0, val));

export default {
    data () {
        return {
            localPercent: 0,
            startPercent: 0,
            isDraging: false,
            startX: 0, // 触摸或点击的初始位置
            deltaX: 0 // 触摸或点击结束后，计算出的位置改变值
        }
    },
    props: {
        percent: {
            type: Number,
            default: 0 // 0-100范围
        }
    },
    watch: {
        percent (val) {
            if (this.isDraging) return;
            this.localPercent = range(val);
        }
    },
    mounted () {
        this.localPercent = range(this.percent);
    },
    methods: {
        updateValue () {
            const { width } = this.$refs.container.getBoundingClientRect();
            this.localPercent = range(this.startPercent + 100 * this.deltaX / width);
        },

        onTouchStart (event) {
            event = event.touches[0];
            this.isDraging = true;
            this.startPercent = this.localPercent;
            this.startX = event.clientX;
            this.deltaX = 0;
        },

        onTouchMove (event) {
            if (!this.isDraging) return;
            event = event.touches[0];
            this.deltaX = event.clientX - this.startX;
            this.updateValue();
        },

        // 拖动按钮结束后，再次更新一下数据
        onTouchEnd () {
            if (!this.isDraging) return;
            this.updateValue();
            this.$emit('change', this.localPercent);
            this.isDraging = false;
        },

        onClick (event) {
            const { left, width } = this.$refs.container.getBoundingClientRect();
            this.localPercent = range(100 * (event.clientX - left) / width);
            this.$emit('change', this.localPercent);
        }
    }
}
</script>

<style lang="sass">
.progress-bar-container
    position: relative
    height: 30px
    &:before
        content: ''
        position: absolute
        top: 50%
        left: 0
        width: 100%
        height: 4px
        border-radius: 1px
        margin-top: -2px
        background: #666
    .progress-bar
        position: absolute
        top: 50%
        height: 4px
        margin-top: -2px
        background-color: #20A0FE
        border-radius: 1px
        z-index: 1
        opacity: .6
    .progress-btn
        position: absolute
        top: 50%
        margin: -15px 0 0 -15px
        width: 30px
        height: 30px
        &:before
            content: ''
            position: absolute
            top: 50%
            left: 50%
            width: 20px
            height: 20px
            margin: -10px 0 0 -10px
            border-radius: 50%
            background: #fff
            z-index: 2


</style>
