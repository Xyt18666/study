<template lang="pug">
.home(
    @click="ggeett" 
)
//- ggeett获取本地数据，需要修改 config 文件

    .banner
        banner-swiper
        //- banner-swiper(v-if="sliderListMsg.length>0")

        //- 由于创建时数据未获取完成，所以轮播图渲染有问题
    .hot-song 
        h3 热门单曲推荐
        ul()
            li(
                v-for="item,index in hitList"
                :key="item.id"
                @click="openMiniMusic(item.id)"
            )
                .img-box
                    img(:src="item.cover")
                .r-msg
                    h4 {{item.song}}
                    p {{item.singer}} - {{item.album}}
                  
</template>

<script>
import { mapState, mapMutations } from "vuex";
import BannerSwiper from "@/components/BannerSwiper.vue";

export default {
    data() {
        return {
            audio: null,
        };
    },
    components: {
        BannerSwiper,
    },
    computed: {
        ...mapState(["hitList", "sliderListMsg", "playList"]),
    },
    methods: {
        ...mapMutations(["setMiniPlaer", "setPlaying", "setplayList"]),
        openMiniMusic(id) {
            // console.log(id);
            this.hitList.map((item, index) => {
                if (item.id == id) {
                    this.setMiniPlaer(this.hitList[index]);
                    this.setplayList(this.hitList[index]);

                    // console.log(this.playList);
                }
            });
            this.setPlaying(true);
            this.audio.pause();
            setTimeout(() => {
                this.audio.play();
                console.log(this);
            }, 200);
        },
        // ggeett() {
        //     console.log(333);

        //     this.$http.post("/").then(
        //         d => {
        //             console.log(d);
        //             console.log(11);
        //         },
        //         e => {
        //             console.log(e);
        //         }
        //     );
        // },
    },
    updated() {
        this.audio = document.querySelector("audio");
    },
};
</script>

<style lang="sass" scoped>
.banner
    // padding: 0 0.2rem
    padding-top: 0.1rem
    height: 1.34rem
    width: 100%


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
                    font-weight: normal
                p
                    height: 0.17rem
                    color: #fff
                    opacity: 0.4
                    font-size: 0.12rem
</style>
