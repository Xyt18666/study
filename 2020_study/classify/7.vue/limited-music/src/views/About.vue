<template lang="pug">
  .about
    h1 This is an about page
    min-player
    confirm-box(
        v-model="visible"
        :a="'是否关闭'"
        b="取消"
        :c="'确定'"
        )
    .boxs(@click="visible=!visible") 弹框

    switch-box(
        :value="val" 
        @input="val=$event"
    )
    //两种相同
    switch-box(
       v-model="val"
    )
</template>

<script>
import MinPlayer from "@/components/MinPlayer.vue";
export default {
    data() {
        return { visible: false, val: false };
    },
    methods: {
        // qx(d) {
        //     this.visible = !d;
        //     console.log("取消", !d);
        // },
        // qr(d) {
        //     this.visible = !d;
        //     console.log("确认", !d);
        // },
    },
    components: {
        MinPlayer,
    },
};
</script>

<style lang="sass"></style>
