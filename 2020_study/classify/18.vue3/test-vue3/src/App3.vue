<template>
    <div>
        <form>
            <input type="text" v-model="state2.stu.id" />
            <input type="text" v-model="state2.stu.name" />
            <input type="text" v-model="state2.stu.age" />
            <input type="submit" @click="addStu" />
        </form>
        <ul>
            <li v-for="(stu, index) in state.stus" :key="stu.id" @click="remStu(index)">
                {{ stu.name }} -- {{ stu.age }}
            </li>
        </ul>
    </div>
</template>

<script>
import { reactive, onBeforeMount, onRenderTracked, onRenderTriggered } from "vue";
import useAddStudent from "./js/add";
import useRemoveStudent from "./js/remove";
// 抽离方法后，引入

export default {
    name: "App",
    setup() {
        let { state, remStu } = useRemoveStudent();
        let { state2, addStu } = useAddStudent(state);
        // 实例方法功能

        console.log("执行了setup");
        onBeforeMount(() => {
            console.log("执行了onBeforeMount");
        });

        // onRenderTracked(e => {
        //     console.log("onRenderTracked", e);
        // });
        // onRenderTriggered(e => {
        //     console.log("onRenderTriggered", e);
        // });

        return {
            //导出属性和方法
            state,
            remStu,
            state2,
            addStu,
        };
    },
    beforeCreate() {
        console.log("beforeCreate");
    },
    created() {
        console.log("created");
    },
};
</script>
