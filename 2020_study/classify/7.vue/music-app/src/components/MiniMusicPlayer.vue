<template lang="pug">
.mini-music-player
    .wrap
        .left
            img(
                :class="[$store.state.playing?'play':'']"
                :src="$store.state.miniPlaer.cover"
            )
            .msg-box
                .song-title {{$store.state.miniPlaer.song}}
                .song-name {{$store.state.miniPlaer.singer}}
        .right
            .play-switch(
                :class="[$store.state.playing?'playbg':'']"
                @click="setPlaying"
            )
            .music-list(
                @click="toggleShow"
            )
    audio(
        :src="$store.state.miniPlaer.url"
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
export default {
    data() {
        return {};
    },
    components: {
        MiniMusicPlaylist,
    },
    computed: {},
    watch: {},

    methods: {
        toggleShow() {
            this.$store.commit("setMusicListShow", !this.$store.state.musicListIsShow);
        },
        setPlaying() {
            this.$store.commit("setPlaying", !this.$store.state.playing);

            const audio = this.$refs.audios;
            this.$store.state.playing ? audio.play() : audio.pause();
        },
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
    background: rgba(0,0,0,0.6)
@keyframes bg
    0%
        background: #fff
    100%
        background: rgba(0,0,0,0.6)

@keyframes imgPlay
    0%
        transform: rotate(0deg)
    100%
        transform: rotate(360deg)

.wrap
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between
    width: 100vw
    bottom: 0
    height: 60px;
    padding: 0 5px 0 10px;
    background-color: #061842;
    background: linear-gradient(15deg,#061842,#2c50a1);
    box-shadow: 0 0 10px rgba(0,0,0,.4);
    .left
        display: flex
        align-items: center
        img
            display: block
            width: 40px
            height: 40px
            border-radius: 50%
            margin: 0
            margin-right: 10px
            animation: 10s linear imgPlay infinite backwards paused
            &.play
                animation: 10s linear imgPlay infinite backwards running
        .msg-box
            color: #fff
            .song-name
                margin-top: 5px
                font-size: 12px
    .right
        display: flex
        .play-switch
            width: 50px
            height: 50px
            background-repeat: no-repeat;
            background-position: 50%;
            background-image: url(../assets/images/icon-play.png);
            background-size: 28px;
            &.playbg
                background-image: url(../assets/images/icon-pause.png);
        .play-switch-stop
            background-image: url(../assets/images/icon-pause.png);

        .music-list
            width: 50px
            height: 50px
            background-repeat: no-repeat;
            background-position: 50%;
            background-image: url(../assets/images/icon-playlist.png);
            background-size: 28px;
</style>
