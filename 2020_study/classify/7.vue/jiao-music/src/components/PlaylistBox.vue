<template lang="pug">
transition(name="playlist-box")
    .playlist-box-container.lm-fixed-container(
        v-show="visible",
        @click="hide"
    )
        .playlist-box(@click.stop)
            .title
                .icon.mode(
                    :class="[playModeObj[mode].key]",
                    @click="changeMode"
                ) {{ playModeObj[mode].label }}
                .icon.clear(@click="confirmBoxVisiable = true") 清空

            scroll-view.song-list(
                :scroll-data="originalList",
                ref="scrollView"
            )
                ul
                    li(
                        v-for="(d, i) in originalList",
                        :key="i",
                        @click="selectItem(d, i)"
                    )
                        playing-icon.icon(v-if="playing && currentSong.id === d.id")
                        .song.lm-ellipsis {{ d.song }}
                        .album.lm-ellipsis {{ d.singer }} - {{ d.album }}
                        .delete(@click.stop="deleteItem(d)")

            .close(@click="hide") 关闭

        confirm-box(v-model="confirmBoxVisiable", @confirm="deleteList") 确认清空播放列表？
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import * as types from '@/store/types.js';
import { playMode, playModeObj } from '@/config/play-mode.js';
import { shuffle } from '@/assets/lib/utils.js';
import PlayingIcon from './PlayingIcon.vue';

export default {
    components: { PlayingIcon },
    data() {
        return {
            visible: false,
            playModeObj,
            confirmBoxVisiable: false
        }
    },
    computed: {
        ...mapGetters([
            'mode',
            'playing',
            'playlist',
            'originalList',
            'currentSong',
            'favoriteList'
        ]),
    },
    methods: {
        ...mapMutations({
            setPlayingState: types.SET_PLAYING_STATE,
            setCurrentIndex: types.SET_CURRENT_INDEX
        }),
        ...mapActions([
            'deleteSong',
            'clearSongList'
        ]),

        selectItem(item, index) {
            if (this.mode === playMode.random) {
                index = this.playlist.findIndex(song => {
                    return song.id === item.id;
                });
            }
            this.setCurrentIndex(index);
            this.setPlayingState(true);
        },
        deleteItem(item) {
            this.deleteSong(item);
            if (!this.playlist.length) this.hide();
        },
        deleteList() {
            this.clearSongList();
            this.hide();
        },
        hide() {
            this.visible = false;
        },
        show() {
            this.visible = true;
            this.$nextTick(() => {
                this.scrollToCurrent(this.currentSong)
            })
        },
        scrollToCurrent(currentSong) {
            const index = this.originalList.findIndex(song => {
                return currentSong.id === song.id;
            });
            // this.$refs.scrollView.scrollToElement(this.$refs.list.$el.children[index], 300)
        },
        changeMode() {
            this.$parent.changeMode();
        }
    }
};
</script>

<style lang="sass" scoped>
.playlist-box-container
    background-color: rgba(0, 0, 0, .8)
    .playlist-box
        position: absolute
        right: 0
        bottom: 0
        left: 0
        background: #000 url(~@/assets/img/bg.png) no-repeat center
        background-size: cover
        box-shadow: 0 0 10px rgba(0, 0, 0, .4)

    .title
        display: flex
        height: 44px
        padding: 0 8px 0 12px
        align-items: center
        justify-content: space-between
        background: rgba(0, 0, 0, .2)
        font-size: 14px
        opacity: .8
        .icon
            background-repeat: no-repeat
            background-position: left center
            background-size: 20px
        .mode
            padding-left: 25px
            &.normal
                background-image: url(~@/assets/img/icon-mode-normal.png)
            &.loop
                background-image: url(~@/assets/img/icon-mode-loop.png)
            &.random
                background-image: url(~@/assets/img/icon-mode-random.png)
        .clear
            padding-left: 22px
            background-image: url(~@/assets/img/icon-delete.png)

    .song-list
        max-height: 325px
        ul
            padding: 15px 10px 15px 30px
            li
                position: relative
                padding-right: 40px
                & + li
                    margin-top: 15px
                .song
                    font-size: 14px
                .album
                    font-size: 12px
                    opacity: .4
                .icon
                    position: absolute
                    left: -20px
                    top: 13px
                .delete
                    position: absolute
                    top: 0
                    right: 0
                    width: 36px
                    height: 36px
                    background: url(~@/assets/img/icon-clear.png) no-repeat center
                    background-size: 20px
                    opacity: .4

    .close
        line-height: 44px
        background: rgba(0, 0, 0, .4)
        text-align: center
        font-size: 16px
        opacity: .8

.playlist-box-enter-active, playlist-box-leave-active
    transition: opacity .3s
    .playlist-box
        transition: transform .3s
.playlist-box-enter, .playlist-box-leave-to
    transition: opacity .3s
    opacity: 0
    .playlist-box
        transition: transform .3s
        transform: translate3d(0, 100%, 0)
</style>
