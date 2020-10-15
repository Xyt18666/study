<template lang="pug">
transition(
    enter-active-class="togglePlaer"
    leave-active-class="togglePlaerTo"
)       
    .plaer-continer(
        v-show="pleraIsBlock"
        v-if="playList.length>0"
        
    ) 
        .bg-content(
            :style="{'backgroundImage':`url(${playList[playIndex].cover})`}"
        )
        .top-msg
            .back(
                @click="togglePlaer"
            )
            .msg-content
                h3 {{playList[playIndex].song}}
                p {{playList[playIndex].singer}} - {{playList[playIndex].album}}
        .main-img
            img(
                :src="playList[playIndex].cover"
                :class="[$store.state.playing?'play':'']"
            )
            p {{"歌词"+playIndex}}
        .controller
            .progress-bar-contenter(
                ref="proCon"
            )
                .progress-bar(
                    :style="{width:`${ daqsc / zsc * 100 }%`}"
                    ref="proBor"
                )
                .progress-button(
                     :style="{transform:`translate(${ daqsc / zsc * 100 *3.15 }px,0)`}"
                     ref="proBut"
                     @touchstart="touchstart"
                     @touchmove="touchmove"
                     @touchend="touchend"
                )
            .song-time
                span {{ getSML(daqsc)}}
                span {{getSML(zsc)}}
            .button-box
                .moderl
                .preve(
                    @click="pre"
                )
                .stop.play(
                    @click="togglePlaying"
                    :class="playing?'active':''"
                )
                .next(
                    @click="nex"
                )
                
                .lick

</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    data() {
        return {
            audio: null,
            bl: null,
            bl2: null,
            cur: null,
        };
    },
    computed: {
        ...mapState(["pleraIsBlock", "playList", "playIndex", "playing", "zsc", "daqsc"]),
    },
    methods: {
        ...mapMutations(["setPleraIsBlock", "setPlaying", "setplayIndex"]),
        pre() {
            let myIndex = this.playIndex;
            let index = myIndex <= 0 ? this.playList.length - 1 : --myIndex;
            this.setplayIndex(index);
            this.audio.pause();
            setTimeout(() => {
                this.audio.play();
            }, 200);
        },
        nex() {
            let myIndex = this.playIndex;
            let index = myIndex >= this.playList.length - 1 ? 0 : ++myIndex;
            this.setplayIndex(index);
            this.audio.pause();
            setTimeout(() => {
                this.audio.play();
            }, 200);
        },
        touchstart(e) {
            // this.audio.pause();
            this.bl =
                (e.touches[0].clientX - this.$refs.proCon.offsetLeft) /
                this.$refs.proCon.offsetWidth;
            this.cur = this.bl * this.audio.duration; //比率*总时长
            this.audio.currentTime = this.cur; //赋值给播放的位置
            this.$refs.proBor.style.width = this.bl * 100 + "%";
        },
        touchmove(e) {
            e.preventDefault();
            this.bl2 =
                (e.touches[0].clientX - this.$refs.proCon.offsetLeft) /
                this.$refs.proCon.offsetWidth;
            this.$refs.proBor.style.width = this.bl2 * 100 + "%";
            let size = this.bl2 * 100;
            size < 0 ? 0 : size > 100 ? 100 : size;
            this.$refs.proBut.style.transform = `translate(${size * 3.15}px,0)`;
            this.cur = this.bl2 * this.audio.duration; //比率*总时长
            this.audio.currentTime = this.cur; //赋值给播放的位置
        },
        touchend() {
            // this.audio.play();
        },

        togglePlaer() {
            this.setPleraIsBlock(false);
        },
        togglePlaying() {
            this.setPlaying(!this.playing);
            let audio = document.querySelector("audio");
            this.playing ? audio.play() : audio.pause();
        },
        getSML(data) {
            //时间转换 函数
            var s = Math.floor(data / 3600);
            var f = Math.floor((data % 3600) / 60);
            var m = Math.floor(data % 60);
            s = s < 10 ? "0" + s : s;
            f = f < 10 ? "0" + f : f;
            m = m < 10 ? "0" + m : m;
            return s + ":" + f + ":" + m;
        },
    },
    mounted() {},
    updated() {
        this.audio = document.querySelector("audio");
    },
    watch: {},
};
</script>

<style lang="sass">

.togglePlaer
    animation: toggle .5s linear
.togglePlaerTo
    animation: toggle .5s linear reverse

@keyframes toggle
    0%
        transform: translate3d(0,100%,0)
    100%
        transform: translate3d(0,0,0)

@keyframes imgPlay
    0%
        transform: rotate(0deg)
    100%
        transform: rotate(360deg)

.plaer-continer
    position: fixed
    top: 0%
    left: 0
    width: 100%
    height: 100%
    z-index: 999
    .bg-content
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        background-position: center center
        background-repeat: no-repeat
        background-size: cover
        filter: blur(10px)
        z-index: -1

    .top-msg
        height: 0.6rem
        display: flex
        align-items: center
        .back
            width: 0.16rem;
            height: 0.16rem;
            border: 0.03rem solid #fff;
            border-width: 0 0 0.03rem 0.03rem;
            transform: rotate(-45deg)
            border-radius: .01rem;
            margin-left: 0.2rem
            margin-top: -0.2rem
        .msg-content
            width: fill-available
            h3
                height: 0.23rem
                font-size: 0.16rem
                line-height: 0.23rem
                text-align: center
                color: #fff
            p
                height: 0.20rem
                font-size: 0.14rem
                line-height: 0.20rem
                text-align: center
                color: #fff
                opacity: 0.4
                margin-top: 0.04rem
    .main-img
        position: relative

        img
            display: block
            width: 2.25rem
            margin: 0.54rem auto
            margin-bottom: 1.56rem
            height: 2.25rem
            border-radius: 2.25rem
            box-shadow: 0 0 0 6px hsla(0,0%,100%,.05), 0 0 0 16px hsla(0,0%,100%,.05), 0 0 0 26px hsla(0,0%,100%,.05);
            animation: 10s linear imgPlay infinite backwards paused
            &.play
                animation: 10s linear imgPlay infinite backwards running
        p

            text-align: center
            opacity: 0.8
            padding: 0 0.2rem
            font-size: 0.14rem
            line-height: 0.2rem
            color: #fff
    .controller
        .progress-bar-contenter
            height: 0.3rem
            width: 3.15rem
            margin: 0 auto
            position: relative
            &:before
                position: absolute
                top: 0.15rem
                content: ''
                display: block
                width: 3.15rem
                height: 0.04rem
                background: #666
                border-radius: 0.01rem
            .progress-bar
                z-index: 900
                position: absolute
                top: 0.15rem
                left: 0
                height: 0.04rem
                width: 0rem
                background: #20A0FE
                border-radius: 0.01rem

            .progress-button
                width: 0.2rem
                height: 0.2rem
                background: #fff
                position: absolute
                top: 0.08rem
                margin-left: -0.1rem
                left: 0
                z-index: 999
                border-radius: 0.2rem
        .song-time
            width: 3.15rem
            display: flex
            margin: 0 auto
            justify-content: space-between
            span
                font-size: 0.12rem
                color: #fff
        .button-box
            display: flex
            width: 3.15rem
            height: 0.8rem
            margin:  auto
            justify-content: space-between
            align-items: center
            div
                background-size: 0.26rem 0.26rem
                width: 0.26rem
                height: 0.26rem
            .stop
                width: 0.5rem
                height: 0.5rem
                background: #2C50A1
                border-radius: 0.5rem
                &.play
                    background-image: url(~@/assets/images/icon-play.png)
                    background-size: 0.26rem 0.26rem
                    background-repeat: no-repeat
                    background-position: 0.12rem 0.12rem
                &.play.active
                    background-image: url(~@/assets/images/icon-pause.png)

            .moderl
                background-image: url(~@/assets/images/icon-mode-normal.png)
            .preve
                background-image: url(~@/assets/images/icon-prev.png)





            .next
                background-image: url(~@/assets/images/icon-next.png)

            .lick
                background-image: url(~@/assets/images/icon-favorite.png)
</style>
