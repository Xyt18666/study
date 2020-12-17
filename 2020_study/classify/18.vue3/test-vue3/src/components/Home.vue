<template>
    <div class="content">
        <h1>ts测试</h1>
        <h2>获取属性:{{ data.d }}</h2>
        <h2>使用ts定义的属性==={{ title }}</h2>
        <button @click="setTil">改变title</button>
        <h2>获取vuex属性:{{ $store.state.title }}</h2>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

interface User {
    name: String;
    age: Number;
    time: Date;
    option?: String;
}

let user: User = {
    name: "String",
    age: 11,
    time: new Date(),
};

export default defineComponent({
    setup() {
        // let data2:User = reactive({})

        let data = reactive({
            a: "a",
            b: [4, 5, 12, 3, 1],
            c: 789,
            d: new Date().toDateString(),
            e: {
                child: "children",
            },
        });
        let title: String = "使用ts定义的属性";

        function setTil(): void {
            console.log(title);
            title = "新值";
            console.log(title);
        }

        return {
            data,
            title,
            setTil,
        };
    },
});
</script>

<style></style>
