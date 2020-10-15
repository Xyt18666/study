<template lang="pug">
transition(name="confirm")
    .confirm-container.lm-fixed-container(v-show="visible", @click.stop)
        .confirm-wrapper
            .confirm-content
                slot
            .confirm-footer
                .btn(@click="onCancel") {{ cancelLabel }}
                .btn(@click="onConfirm") {{ confirmLabel }}
</template>

<script>
export default {
    data () {
        return {
            visible: false
        };
    },
    props: {
        value: {
            type: Boolean,
            default: false
        },
        cancelLabel: {
            type: String,
            default: '取消'
        },
        confirmLabel: {
            type: String,
            default: '确定'
        }
    },
    watch: {
        visible (val) {
            this.$emit('input', val);
        },
        value (val) {
            this.visible = val;
        }
    },
    created () {
        this.visible = this.value;
    },
    methods: {
        onCancel() {
            this.visible = false;
            this.$emit('cancel');
        },
        onConfirm() {
            this.visible = false;
            this.$emit('confirm');
        }
    }
}
</script>

<style lang="sass" scoped>
.confirm-container
    z-index: 999
    background-color: rgba(0, 0, 0, .8)
    .confirm-wrapper
        position: absolute
        top: 45%
        left: 50%
        transform: translate(-50%, -50%)
        width: 80%
        height: auto
        background-color: #333
        border-radius: 5px
        font-size: 14px
    .confirm-content
        padding: 20px
        text-align: center
        opacity: .8
    .confirm-footer
        display: flex
        position: relative
        &:before
            content: ''
            position: absolute
            top: 0
            left: 0
            width: 200%
            height: 1px
            background: #000
            transform: scale(.5)
            transform-origin: 0 0
        .btn
            flex: 1
            text-align: center
            line-height: 40px
            & + .btn
                position: relative
                &:before
                    content: ''
                    position: absolute
                    top: 0
                    left: 0
                    width: 1px
                    height: 200%
                    background: #000
                    transform: scale(.5)
                    transform-origin: 0 0
.confirm-enter-active
    animation: confirm-fade .3s
    .confirm-wrapper
        animation: confirm-zoom .3s

@keyframes confirm-fade
    0%
        opacity: 0
    100%
        opacity: 1

@keyframes confirm-zoom
    0%
        transform: translate(-50%, -50%) scale(0)
    50%
        transform: translate(-50%, -50%) scale(1.1)
    100%
        transform: translate(-50%, -50%) scale(1)
</style>
