<template lang="pug">
.yao()
   h1 血压
   XueYaItem(
       v-for="(d,i) in msg"
       :key="i"
       :data="d"
   )

   h2(@click="show=!show") 添加血压
   xue-ya(
       v-show="show"
       @getMsg="getMsg"
       )

</template>

<script>
import XueYa from "@/components/XueYa.vue";
import XueYaItem from "@/components/XueYaItem.vue";

export default {
    data: function() {
        return {
            show: false,
            msg: [
                {
                    time: 11,
                    name: "亚",
                    size: 999,
                },
            ],
        };
    },
    components: {
        XueYa,
        XueYaItem
    },
    methods: {
        getMsg(e) {
            this.show = false;
            console.log(11, e);
            this.msg.push(e)
        },
    },
};
</script>

<style></style>
