<template lang="pug">
    .mini-player
        
        .cd(
            :class="{'playing': playing }" 
            :style="{'background-image':` url(${songItem.cover})`}"
        )
        .inof
            h3 {{ songItem.song }}
            p {{ songItem.singer }}
        .btn-wrapper
            .btn(
                :class="[ playing ? 'pause' : 'play']"  
                @click="playing = !playing"
            )
            .btn.playlist
       
</template>

<script>
export default {
    data() {
        return {
            songItem: {
                song: "模特",
                singer: "李荣浩",
                cover: "http://jxsjs.com/img/album1.jpg",
            },
            playing: false,
        };
    },
};
</script>

<style scoped lang="sass">
/* 给 style 添加 scoped 属性，它的 CSS 只作用于当前组件 ,实现模块化 css */

@keyframes playing
    to
        transform: rotate(360deg)


.mini-player
    display: flex
    align-items: center
    justify-content: space-between
    position: fixed
    right: 0
    bottom: 0
    left: 0
    height: 60px
    padding: 0 10px
    background: linear-gradient(15deg, #061842, #2c50a1)
    color: #fff

    .cd
        flex: 0 0 40px
        width: 40px
        height: 40px
        border-radius: 50%
        background-repeat: no-repeat
        background-size: cover
        animation: playing 3s linear infinite
        animation-play-state: paused

        &.playing
            animation-play-state: running


    .info
        flex-grow: 1
        padding-left: 20px
        text-align: left

        h3
            line-height: 1em
            font-size: 18px

        p
            font-size: 14px

    .btn-wrapper
        flex: 0 0 80px
        width: 80px
        height: 40px

    .btn
        float: left
        width: 40px
        height: 40px
        background-repeat: no-repeat
        background-position: center
        background-size: 20px

    .play
        background-image: url(~@/assets/img/icon-play.png)
        /* 引入url背景图时 ~@/路径 */

    .pause
        background-image: url(~@/assets/img/icon-pause.png)

    .playlist
        background-image: url(~@/assets/img/icon-playlist.png)
</style>
