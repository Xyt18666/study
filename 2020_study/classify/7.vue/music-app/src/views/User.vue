<template lang="pug">
.user
    .button-box
        p(
            @click="isBlockId=0"
            :class="isBlockId==0?'active':''"
            key="a"
        ) 我的收藏
        p(
            @click="isBlockId=1"
            :class="isBlockId==1?'active':''"
            key="b"
            ) 最近收听
    .tab-box
        .sc-box(v-show="isBlockId==0")
            ul
                li(
                    v-for="item in myCollection"
                    :key="item.id"
                )
                    h4 {{item.song}}
                    p {{item.singer}} - {{item.album}}

        .zj-box(v-show="isBlockId==1")
             ul
                li(
                    v-for="item in listenRecentlyList"
                    :key="item.id"
                )
                    h4 {{item.song}}
                    p {{item.singer}} - {{item.album}}

</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState(["listenRecentlyList", "myCollection"]),
    },
    data() {
        return {
            isBlockId: 0,
        };
    },
};
</script>

<style lang="sass" scoped>



.button-box
    width: 3.4rem
    height: 0.32rem
    display: flex
    border: 1px solid #2C50A1
    border-radius: 0.05rem
    margin: 0.2rem auto
    p
        flex: 1
        text-align: center
        font-size: 0.14rem
        line-height: 0.32rem
        color: #999
        transition: color 1s
        &.active
            transition: color 1s
            background: #2C50A1
            color: #fff
.tab-box
    ul
        li
            padding-left: 0.2rem
            margin-top: 0.13rem
            h4
                color: #fff
                height: 0.2rem
                font-size: 0.14rem
                font-weight: normal
            p
                height: 0.17rem
                color: #fff
                opacity: 0.4
                font-size: 0.12rem
</style>
