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
       @hook:mounted="getmsg2"
       )

</template>

<script>
import XueYa from "@/components/XueYa.vue";
import XueYaItem from "@/components/XueYaItem.vue";

export default {
    // props: ["id"],
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
        XueYaItem,
    },
    methods: {
        getMsg(e) {
            this.show = false;
            console.log(11, e);
            this.msg.push(e);
        },
        getmsg2() {
            console.log("监听子组件的生命周期");
        },
    },
    mounted() {
        // console.log(this.props.id);
    },
};
</script>

<style></style>
