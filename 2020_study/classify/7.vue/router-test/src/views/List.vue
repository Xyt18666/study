<template lang="pug">
    .list 
        //- router-link(
        //-     to="/msg/123"
        //- ) 第一种 ， 跳转msg ，传递参数 num 123
        ul
            li(
                v-for="item in list"
                :key="item.id"
                @click="toMsg(item.id)"
            ) {{item.name}}
        router-view

        p(
            @click="toChild"
        ) to child

</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    name: "xiaohei",
                    id: "001",
                },
                {
                    name: "xiaoming",
                    id: "002",
                },
                {
                    name: "xiaohan",
                    id: "003",
                },
            ],
        };
    },
    methods: {
        toMsg(id) {
            // this.$router.push({
            //     // 第二种 push path 拼字符串 ，这里只是传入了 一个值
            //     path: `/msg/${id}`,
            // });

            // 第三种  name+params 传参
            this.$router.push({
                name: "Msg",
                params: {
                    id: id,
                    ok: "nonono",
                },
                query: {
                    //最好不要用这个
                    what: "what",
                },
            });

            // 第四种 使用 path + query
            // this.$router.push({
            //     path: "/msg",
            //     query: {
            //         a: "aa" + id,
            //     },
            // });
        },
        toChild() {
            this.$router.push({
                name: "Child",
                params: {
                    ok: "child1111122222",
                },
            });
        },
    },
};
</script>

<style></style>
