<template>
    <div>
        <h1>测试setup中的属性{{ count }}</h1>
        <button @click="myFn"></button>
        <!-- --------------上面是测试，下面是修改案例---------------- -->
        <ul>
            <li v-for="(stu, index) in state.stus" :key="stu.id" @click="remStu(index)">
                {{ stu.name }} -- {{ stu.age }}
            </li>
        </ul>
    </div>
</template>

<script>
import { reactive, ref } from "vue";

function useRemoveStudent() {
    // 一个组合api的函数

    let state = reactive({
        // 组合api的属性
        stus: [
            { id: 1, name: "zs", age: 10 },
            { id: 2, name: "ls", age: 20 },
            { id: 3, name: "ww", age: 30 },
        ],
    });

    // 组合api的方法
    function remStu(index) {
        state.stus = state.stus.filter((stu, idx) => idx != index);
    }

    // 返回这些数据
    return { state, remStu };
}

export default {
    name: "App2",
    setup() {
        //组合api入口函数

        let count = ref(0);
        /*
        定义一个变量

        ref :只能监听一个简单类型的变化，不能监听复杂类型的换行
        reactive ：可以监听复杂类型的数据 ，接收一个{}，内部是数据
        
        */

        function myFn() {
            // 定义一个方法
            console.log(456);
            count.value += 1;
        }
        // --------------上面是测试，下面是修改案例----------------
        let { state, remStu } = useRemoveStudent();
        // 通过组合api把所需参数暴露出来，最后setup暴露给页面所需

        return {
            //暴露变量
            count,
            myFn,
            state,
            remStu,
        };
    },
};
</script>
