<template lang="pug">
    .confirm-box-wrap(v-show="value")
        .confirm-box
            slot 不传参数时的默认值
            .content
                | {{ a }}
            .footer
                .btn(@click="cancle") {{ b }}
                .btn(@click="confirm") {{ c }}
</template>

<script>
export default {
    data() {
        return {};
    },
    props: {
        a: {
            type: String,
            rquired: true,
        },
        b: String,
        c: String,
        value: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        cancle() {
            this.$emit("input", !this.value);
            this.$emit("quxiao");

        },
        confirm() {
            this.$emit("input", !this.value);
            this.$emit("queren");
        },
    },
};
</script>

<style lang="sass" scoped>
.confirm-box-wrap
   position: fixed
   top: 0
   left: 0
   right: 0
   bottom: 0
   z-index: 999
   background-color: rgba(0,0,0,0.8)

   .confirm-box
       position: absolute
       top: 50%
       left: 50%
       transform: translate(-50%,-50%)
       width: 60%
       background: #fff
       text-align: center
       line-height: 2rem
       border-radius: 5px

       .footer
           display: flex
           position: relative

           &:before
               content: ""
               position: absolute
               top: 0
               left: 0
               width: 200%
               height: 1px
               background: #000
               transform: scale(0.5)
               transform-origin: 0 0

           .btn
               flex: 1

           .btn+.btn
                border-left: 1px solid #000
</style>
