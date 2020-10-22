<template lang="pug">
.test-stort
    ul
        li(
            v-for="item,index in list"
        )
            p 数量 {{item.count}}  ---- {{item.price}} 单价
            p 当前 商品 总价 {{item.count * item.price}}
            p ++ 
            p --
            p(
                @click="pushStort(item)"
            ) 加入购物车
    p --------------------------    

    h2 我的购物车
     ul
        li(
            v-for="item,index in stort"
        )
            p 数量 {{item.count}}  ---- {{item.price}} 单价
            p 当前 商品 总价 {{item.count * item.price}}
            p ++ 
            p --


</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    computed: {
        ...mapState(["stort", "list"]),
    },
    methods: {
        ...mapMutations(["pushStortItem"]),
        pushStort(item) {
            this.pushStortItem(item);
        },
    },
};
</script>

<style lang="sass"></style>
