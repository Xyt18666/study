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
import { reactive } from "vue";
import useAddStudent from "./js/add";
import useRemoveStudent from "./js/remove";
// 抽离方法后，引入

export default {
    name: "App",
    setup() {
        let { state, remStu } = useRemoveStudent();
        let { state2, addStu } = useAddStudent(state);
        // 实例方法功能

        return {
            //导出属性和方法
            state,
            remStu,
            state2,
            addStu,
        };
    },
};
</script>
