<template lang="pug">
.mini-music-player(
    v-if="playList.length>0"
)
    .wrap(
        @click="togglePlaer"
    )
        .left
            img(
                :class="[$store.state.playing?'play':'']"
                :src="playList[playIndex].cover"
            )
            .msg-box
                .song-title {{playList[playIndex].song}}
                .song-name {{playList[playIndex].singer}}
        .right
            .play-switch(
                :class="[$store.state.playing?'playbg':'']"
                @click.stop="setPlaying"
            )
            .music-list(
                @click.stop="toggleShow"
            )
    audio(
        :src="playList[playIndex].url"
        ref="audios"
    )
    transition(
        enter-active-class="bg"
        leave-active-class="bgt"
    )
        .mini-list-wrap(
            v-if="$store.state.musicListIsShow"
            @click="toggleShow"
            )
    transition(name="toggle-play-list")
        mini-music-playlist(v-if="$store.state.musicListIsShow")

</template>

<script>
import MiniMusicPlaylist from "@/components/MiniMusicPlaylist.vue";
import { mapState, mapMutations } from "vuex";

export default {
    data() {
        return {
            audio: null,
        };
    },
    components: {
        MiniMusicPlaylist,
    },
    computed: {
        ...mapState(["playList", "playIndex"]),
    },
    watch: {},

    methods: {
        ...mapMutations(["setPleraIsBlock", "setZsc", "setDaqsc"]),
        toggleShow() {
            this.$store.commit("setMusicListShow", !this.$store.state.musicListIsShow);
        },
        setPlaying() {
            this.$store.commit("setPlaying", !this.$store.state.playing);

            const audio = this.$refs.audios;
            this.$store.state.playing ? audio.play() : audio.pause();
        },
        togglePlaer() {
            this.setPleraIsBlock(true);
        },
    },
    updated() {
        this.audio = this.$refs.audios;
        this.audio.oncanplay = () => {
            setInterval(() => {
                this.setZsc(this.audio.duration);
                this.setDaqsc(this.audio.currentTime);
            }, 1000);
        };
    },
};
</script>

<style lang="sass" scoped>



.toggle-play-list-enter,.toggle-play-list-leave-to
    bottom: -100%

.toggle-play-list-enter-active,.toggle-play-list-leave-active
    transition: 1s

.bg
    animation: bg 1s

.bgt
    animation: bg 1s reverse
    animation-delay: -0.5s

.mini-list-wrap
    position: absolute
    top: 0
    left: 0
    width: 100vw
    height: 100%
    z-index: 800
    background: rgba(0,0,0,0.6)

@keyframes bg
    0%
        background: rgba(0,0,0,0)
    100%
        background: rgba(0,0,0,0.6)

@keyframes imgPlay
    0%
        transform: rotate(0deg)
    100%
        transform: rotate(360deg)

.wrap
    width: 100%
    z-index: 600
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between
    bottom: 0
    height: 0.61rem;
    background-color: #061842;
    background: linear-gradient(15deg,#061842,#2c50a1);
    box-shadow: 0 0 10px rgba(0,0,0,.4);
    .left
        display: flex
        align-items: center
        margin-left:  0.11rem
        img
            display: block
            width: 40px
            height: 40px
            border-radius: 50%
            margin: 0
            margin-right: 0.1rem
            animation: 10s linear imgPlay infinite backwards paused
            &.play
                animation: 10s linear imgPlay infinite backwards running
        .msg-box
            color: #fff
            .song-title
                font-size: 0.14rem
                height: 0.2rem
                line-height: 0.2rem
            .song-name
                margin-top: 5px
                opacity: 0.4
                height: 0.16rem
                line-height: 0.16rem
                font-size: 0.12rem
    .right
        display: flex
        align-items: center
        margin-right:  0.18rem
        .play-switch
            width: 0.37rem
            height: 0.37rem
            background-repeat: no-repeat;
            background-position: 50%;
            background-image: url(../assets/images/icon-play.png);
            background-size: 0.15rem;
            margin-right: 0.18rem
            &.playbg
                background-image: url(../assets/images/icon-pause.png);
        .play-switch-stop
            background-image: url(../assets/images/icon-pause.png);

        .music-list
            width: 0.28rem
            height: 0.28rem
            background-repeat: no-repeat;
            background-position: 50%;
            background-image: url(../assets/images/icon-playlist.png);
            background-size: 0.28rem;
</style>
