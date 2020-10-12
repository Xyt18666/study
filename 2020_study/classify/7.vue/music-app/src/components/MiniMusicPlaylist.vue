<template lang="pug">
  .mini-music-playlist
   
    .top
        .play-model 顺序播放
        .removeList(
            @click="removeHotList"
        ) 清空列表
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
        :msg="'确认清空列表?'"
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
        padding: 10px
        align-items: center
        .play-model
            padding-left: 25px
            &:before
            content: ""
            left: -20px
            background-image: url(../assets/images/icon-mode-normal.png)
            background-repeat: no-repeat;
            background-position: 0;
            background-size: 20px;
        .removeList
            padding-left: 25px
            &:before
            content: ""
            left: -20px
            background-image: url(../assets/images/icon-delete.png)
            background-repeat: no-repeat;
            background-position: 0;
            background-size: 20px;
    ul
        li
            display: flex
            align-items: center
            justify-content: space-between
            p
                font: 16px/18px ""
            p+p
                font: 12px/14px ""
            .clear
                width: 36px
                height: 36px;
                background: url(../assets/images/icon-clear.png) no-repeat 50%;
                background-size: 20px;
                opacity: .4;
    .colse
        text-align: center
        height: 36px
</style>
