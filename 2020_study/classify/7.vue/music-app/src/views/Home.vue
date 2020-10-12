<template lang="pug">
.home
    .banner
        .banner-content {{sliderListMsg}}
    .hot-song 
        h3 热门单曲推荐
        ul
            li(
                v-for="item,index in hitList"
                :key="item.id"
                @click="openMiniMusic(item.id)"
            )
                .img-box
                    img(:src="item.cover")
                .r-msg
                    h4 {{item.singer}}
                    p {{item.song}}
                  
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    data() {
        return {};
    },
    computed: {
        ...mapState(["hitList", "sliderListMsg"]),
    },
    methods: {
        ...mapMutations(["setMiniPlaer", "setPlaying"]),
        openMiniMusic(id) {
            console.log(id);
            this.hitList.map((item, index) => {
                if (item.id == id) {
                    this.setMiniPlaer(this.hitList[index]);
                }
            });
            this.setPlaying(true);
        },
    },
};
</script>

<style lang="sass" scoped>
.banner
    padding: 0 0.2rem
    padding-top: 0.1rem
    height: 1.34rem
    width: 3.35rem
    overflow: hidden

    .banner-content
        background: #fff
        border-radius: 0.05rem
        font-size: 0.12rem
.hot-song
    padding: 0 0.2rem
    h3
        height: 0.23rem
        font-size: 0.16rem
        line-height: 0.23rem
        color: #fff
        margin-top: 0.14rem
        font-weight: normal
        margin-bottom: 0.13rem
    ul
        li
            margin-bottom: 0.15rem
            display: flex
            .img-box
                width: 0.5rem
                height: 0.5rem
                border: 0.01rem solid #5A485F;
                border-radius: 0.03rem
                margin-right: 0.15rem
                overflow: hidden
                position: relative
                img
                    position: absolute
                    width: 0.5rem
                    height: 0.5rem
                    border-radius: 0.03rem
            .r-msg
                margin-top: 0.07rem
                h4
                    color: #fff
                    height: 0.2rem
                    font-size: 0.14rem
                p
                    height: 0.17rem
                    color: #fff
                    opacity: 0.4
                    font-size: 0.12rem
</style>
