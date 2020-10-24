<template lang="pug">
 .content
    //- 渲染商品列表(点击加入购物车)
        底部 总和 和 数量
        点击 购物车 ，购物车组件划出
        购物车增删，数据并存入 本地存储
    ul
        li(
            v-for="item,index in list"
        )
            img(:src='item.pic')
            p {{item.text}}
            p 数量 {{item.count}}  ---- {{item.price}} 单价
            p(@click="setItem(1,item)") ++
            p(@click="setItem(-1,item)") --
    
    .gwc
        p 总数{{num}}
        p 总价{{moy}}
        p(
            @click="isShow=!isShow"
        ) 进入购物车
    
    gwc(
        :isShow="isShow"
        @back="isShow=false"
    )
           


 </template>

<script>
import { mapState, mapMutations } from "vuex";
import Gwc from "@/components/Gwc.vue";
export default {
    data() {
        return {
            isShow: false,
        };
    },
    components: {
        Gwc,
    },
    computed: {
        ...mapState(["stort", "list"]),
        num() {
            let nums = 0;
            this.stort.map(item => {
                nums += item.count;
            });
            return nums;
        },
        moy() {
            let moys = 0;
            this.stort.map(item => {
                moys += item.count * item.price;
            });
            return moys;
        },
    },
    methods: {
        ...mapMutations(["pushStortItem", "clearStortItem"]),
        setItem(size, item) {
            if (size > 0) {
                this.pushStortItem(item);
            } else {
                this.clearStortItem(item);
            }
        },
    },
};
</script>

<style lang="sass">
img
    width: 50px
</style>
