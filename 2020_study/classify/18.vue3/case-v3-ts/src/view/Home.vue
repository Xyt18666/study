<template>
    <div class="home_content">
        <h1>home</h1>
        <!-- reactive 使用.xx使用值 -->
        <p>数字{{ state.num }}</p>
        <p @click="setNum(123)">修改</p>

        <!-- ref 直接使用值 -->

        <p>state2:{{ state2 }}</p>
        <p>state3:{{ state3.q }}</p>
        <p>非递归监听：{{ state4 }}----------{{ state5 }}</p>
        <p @click="setShallow">修改非第一层数据</p>
        <p @click="setShallow2">修改第一层数据</p>
        <p @click="trig">使用triggerRef主动刷新视图</p>
        <p @click="test">测试原始数据与包装数据的关系：{{ state6 }}</p>
        <p @click="setObj2">修改原始数据</p>
        <p @click="setState7">永远不会追踪{{ state7.qwe }}</p>
    </div>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    ref,
    isRef,
    isReactive,
    shallowReactive,
    shallowRef,
    triggerRef,
    toRaw,
    markRaw,
} from "vue";

export default defineComponent({
    setup() {
        // 使用reactive创建响应器 ,只能是数组或者对象
        let state = reactive({
            num: 0,
            arr: [1, "p8", 52],
            obj: { a: "AA", b: "bb" },
        });

        let state2 = ref(778899);
        // 使用ref创建响应器 ,单值,数组,对象....都行
        let state3 = ref({ q: "qq" });

        let state4 = shallowReactive({ w: "ww", r: { e: "ee", o: { i: "ii" } } });
        // 非递归 监听 ，只监听第一层
        let state5 = shallowRef({ e: "ee" });

        let datas = { num: 0 };

        let state6 = reactive(datas);

        let obj2 = toRaw(state);

        let obj3 = markRaw({ qwe: "Qwe" });
        let state7 = reactive(obj3);

        function setState7() {
            // state7.qwe = "QWE";
            // console.log(state7);
            console.log(obj3);
            obj3.qwe = "QWE";
            console.log(obj3, state7);
            state7.qwe = "RTY";
            console.log(obj3, state7);
            // 永远不会刷新视图
        }

        function setObj2() {
            console.log(obj2);
            obj2.num = 777;
            console.log(obj2, state);
            // 获取原始数据，修改原始数据，从而实现不响应视图刷新，但是改变了数据
        }

        function setNum(e) {
            //  reactive 使用.xx修改值
            state.num = e;

            // ref 使用.value修改值
            state2.value = 777;

            // -------------------------------------------------
            //  此处调用函数时，会刷新dom，因为连带刷新

            state4.r.o.i = "II";
            // 修改非第一层
            state5.value.e = "EE";
        }

        function setShallow(e) {
            //  单独调用函数时，不会刷新dom
            state4.r.o.i = "II";
            // 修改非第一层
            state5.value.e = "EE";
        }
        function setShallow2(e) {
            state4.w = "WW";
            // 修改第一层
            state5.value = { e: "EE" };
            // state5.value.e = "EE";
        }
        function trig() {
            state5.value.e = "EE";
            triggerRef(state5);
        }

        function test() {
            console.log(datas, state6);
            datas.num = 10;
            // console.log(datas, state6);
            // state6.num = 20;
            console.log(datas, state6);
            // 引用关系，数据会改变，但是，不会触发视图刷新
        }

        console.log(isRef(state2));
        // 判断是哪一种
        console.log(isReactive(state));

        return {
            state,
            state2,
            state3,
            state4,
            state5,
            state6,
            state7,

            setNum,
            setShallow,
            setShallow2,
            trig,
           
            test,
            setObj2,
            setState7,
        };
        // 释放属性和方法
    },
});
</script>

<style></style>
