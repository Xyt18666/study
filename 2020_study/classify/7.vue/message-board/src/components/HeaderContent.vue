<template lang="pug">
    .header-content 
        p(
            @click="isshow"
        ) 发布
        release-masg(
            v-if="isshowbox"
            v-on="$listeners"
            @close="isshowbox=$event"
        )
        p(
            @click="$emit('reset')"
        ) 清空
        p(
            @click="$emit('search')"
        ) 筛选
</template>

<script>
import ReleaseMasg from "@/components/ReleaseMasg.vue";
export default {
    data() {
        return {
            isshowbox: false,
        };
    },

    methods: {
        isshow() {
            this.isshowbox = true;
        },
    },
    components: {
        ReleaseMasg,
    },
};
</script>

<style scoped lang="sass">
.header-content
    display: flex
    p
        width: 40px
        height: 40px
        border-radius: 20px
        background: #00f
        color: red
        text-align: center
        line-height: 40px
</style>
