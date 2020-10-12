<template lang="pug">
  .mini-music-playlist
   
    .top
        .play-model 顺序播放
        .removeList(
            @click="removeHotList"
        ) 清空
    ul
        li(
            v-for="(item,index) in $store.state.hitList"
            :key="item.id"
            @click="setMiniPlaer(item)"
        )
            .music-msg
                p {{item.song}}
                p {{item.singer}}
            .clear(
                @click.stop="clearItem(item.id)"
            )
    .colse(
        @click="toggleShow"
    ) 关闭
    confirm-box(
        :msg="'确认清空播放列表?'"
        @confirm="confirm"
        @cancel="cancel"
    )


    

</template>

<script>
import ConfirmBox from "@/components/common/ConfirmBox.vue";
export default {
    components: {
        ConfirmBox,
    },
    data() {
        return {};
    },
    methods: {
        clearItem(id) {
            this.$store.commit("clearItem", id);
        },
        toggleShow() {
            this.$store.commit("setMusicListShow", !this.$store.state.musicListIsShow);
        },
        setMiniPlaer(d) {
            this.$store.commit("setMiniPlaer", d);
            this.$store.commit("setPlaying", true);
            this.toggleShow();
        },
        removeHotList() {
            this.$store.commit("setClearHotIsShow", true);
        },
        confirm() {
            this.$store.commit("setClearHotIsShow", false);
            this.$store.commit("setHitList", null);
            this.toggleShow();
        },
        cancel() {
            this.$store.commit("setClearHotIsShow", false);
        },
    },
    computed: {},
    created() {},
};
</script>

<style lang="sass" scoped>
.mini-music-playlist
    position: fixed
    z-index: 800
    width: 100vw
    bottom: 0

    background-size: cover;
    background: #000 url(../assets/images//bg.png) no-repeat 50%;
    color: #fff

    .top

        display: flex

        justify-content: space-between
        padding: 0.1rem
        align-items: center
        .play-model
            height: 0.2rem
            font-size: 0.15rem
            line-height: 0.2rem

            padding-left: 0.25rem
            &:before
            content: ""
            left: -0.2rem
            background-image: url(../assets/images/icon-mode-normal.png)
            background-repeat: no-repeat;
            background-position: 0;
            background-size: 0.2rem;
        .removeList
            padding-left: 0.25rem
            height: 0.2rem
            font-size: 0.15rem
            line-height: 0.2rem
            &:before
            content: ""
            left: 0.2rem
            background-image: url(../assets/images/icon-delete.png)
            background-repeat: no-repeat;
            background-position: 0;
            background-size: 0.2rem;
    ul
        li
            display: flex
            align-items: center
            justify-content: space-between
            padding-left: 0.33rem
            margin-top: 0.13rem
            &:last-child
                margin-bottom: 0.13rem
            p
                height: 0.2rem
                font-size: 0.15rem
                line-height: 0.2rem
            p+p
                height: 0.17rem
                font-size: 0.12rem
                line-height: 0.17rem
                opacity: 0.4

            .clear
                width: 0.2rem
                height: 0.2rem
                background: url(../assets/images/icon-clear.png) no-repeat 50%;
                background-size: 0.2rem
                opacity: .4;
                margin-right: 0.22rem
    .colse
        height: 0.44rem
        background: #000
        font-size: 0.16rem
        line-height: 0.44rem
        color: #fff
        opacity: 0.8
        text-align: center
</style>
