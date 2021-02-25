<template>
    <div class="list_item">
        <p>{{ names }}</p>
        <p>{{ time }}</p>
        <p @click="goMap">导航</p>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
    props: ["datas"],
    setup(props, context) {
        const names = ref(props.datas.names);
        const time = ref(props.datas.time);

        function goMap() {
            console.log("执行goMap");
        }

        // console.log(props.datas, context);
        // console.log(context.attrs);
        // // Attribute (非响应式对象)
        // console.log(context.slots);
        // // 插槽 (非响应式对象)
        // console.log(context.emit);
        // // 触发事件 (方法)

        return { names, time, goMap };
    },
});
</script>

<style></style>
