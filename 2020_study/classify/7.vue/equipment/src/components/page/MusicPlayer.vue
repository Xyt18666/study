<template lang="pug">
.music-player-container(v-show="playlist.length > 0")
    transition(name="mini")
        .mini-player-container.lm-fixed-container(
            @click="toggleFullscreen"
        )
            .cd.lm-bg-cover(
                :style="cover",
                :class="{ playing }"
            )
            .info
                .song.lm-ellipsis {{ currentSong.song }}
                .singer.lm-ellipsis {{ currentSong.singer }}
            progress-circle.btn.play(
                @click.native.stop="togglePlayingState",
                :percent="percent",
                :radius="36"
            )
                .icon(:class="{ playing }")
            .btn.playlist(@click.stop="showPlaylist")
                .icon

    transition(name="fullscreen")
        .fullscreen-player-container.lm-fixed-container.lm-bg-cover(v-show="fullscreen")
            .bg.lm-bg-cover(:style="cover")
            arrow-btn.down-btn(arrow-type="down", @click.native="toggleFullscreen")
            .title-container
                h1.lm-ellipsis {{ currentSong.song }}
                h2.lm-ellipsis {{ currentSong.singer }}
            .main-container(
                :class="{ touching: touch.touching }",
                @touchstart.prevent="onTouchStart",
                @touchmove.prevent="onTouchMove",
                @touchend="onTouchEnd"
            )
                .l(ref="left", :style="{ opacity }")
                    .cd-container
                        .cd.lm-bg-cover(
                            :style="cover",
                            :class="{ playing }"
                        )
                    .playing-lrc {{ playingLrc }}
                .r(ref="right", :style="{ transform: `translate3D(${translateX}px, 0, 0)` }")
                    scroll-view(
                        ref="scrollView",
                        :data="(currentLrc && currentLrc.lines) || []"
                    )
                        .lrc-container(v-if="currentLrc")
                            p(
                                v-for="(d, i) in currentLrc.lines",
                                ref="lrcLine",
                                :class="{ 'current': currentLrcLineNum === i }"
                            ) {{ d.txt }}
            .controls-container
                progress-bar(:percent="percent", @change="percentChange")
                .time-container
                    .current-time {{ currentTime | duration }}
                    .duration {{ currentSong.duration | duration }}
                .controls-bar
                    .btn.mode(@click="changeMode", :class="[playModeObj[mode].key]")
                    .btn.prev(@click="prevSong")
                    .btn.play(@click="togglePlayingState", :class="{ playing }")
                    .btn.next(@click="nextSong")
                    .btn.favorite(@click="toggleFavorite", :class="{ active: isFavorite }")

    playlist-box(ref="playlist")

    audio(
        ref="audio",
        :src="currentSong.url",
        @play="audioReady",
        @timeupdate="audioTimeUpdate",
        @ended="audioEnded",
        @error="audioError"
    )
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import * as types from '@/store/types.js';
import { shuffle } from '@/assets/lib/utils.js';
import Lyric from 'lyric-parser';
import { Base64 } from 'js-base64';
import ProgressBar from '@/components/ProgressBar.vue';
import ProgressCircle from '@/components/ProgressCircle.vue';
import PlaylistBox from '@/components/PlaylistBox.vue';
import { playMode, playModeObj } from '@/config/play-mode.js';
import playerTouchMixin from '@/assets/mixin/player-touch.js';

export default {
    mixins: [playerTouchMixin],
    components: { ProgressBar, ProgressCircle, PlaylistBox },
    data() {
        return {
            songReady: false,
            currentTime: 0,
            currentLrc: null,
            currentLrcLineNum: 0,
            playingLrc: '',
            playModeObj,
            lrcCacheObj: {}
        }
    },
    computed: {
        ...mapGetters([
            'fullscreen',
            'mode',
            'playing',
            'playlist',
            'originalList',
            'currentIndex',
            'currentSong',
            'favoriteList'
        ]),
        cover() {
            return {
                'background-image': 'url(' + this.currentSong.cover + ')'
            };
        },
        percent() {
            return this.currentTime / this.currentSong.duration * 100;
        },
        isFavorite() {
            return this.favoriteList.findIndex(item => item.id === this.currentSong.id) > -1;
        }
    },
    watch: {
        playing(val) {
            const audio = this.$refs.audio;
            this.$nextTick(() => {
                val ? audio.play() : audio.pause();
            });
        },
        currentSong(newSong, oldSong) {
            if (!newSong.id) return;
            if (newSong.id === oldSong.id) return;
            this.songReady = false;
            this.currentTime = 0;

            if (this.currentLrc) {
                this.currentLrc.stop();
                this.currentLrc = null;
                this.currentLrcLineNum = 0;
                this.playingLrc = '';
            }
            setTimeout(() => {
                this.$refs.audio.play();
                this.getLrc().then(lrc => {
                    this.currentLrc = new Lyric(lrc, this.handleLrc);
                    if (this.playing) this.currentLrc.play();
                });
            }, 1000);
        },
        fullscreen(val) {
            if (val) {
                this.$refs.scrollView.refresh();
            }
        }
    },
    methods: {
        ...mapMutations({
            setFullscreen: types.SET_FULLSCREEN,
            setPlayMode: types.SET_PLAY_MODE,
            setPlayingState: types.SET_PLAYING_STATE,
            setPlaylist: types.SET_PLAYLIST,
            setCurrentIndex: types.SET_CURRENT_INDEX
        }),
        ...mapActions(['savePlayHistory', 'saveFavoriteList']),

        percentChange(val) {
            const currentTime = Math.round(this.currentSong.duration * val / 100);
            this.$refs.audio.currentTime = currentTime;
            if (!this.playing) this.togglePlayingState();
            if (this.currentLrc) {
                this.currentLrc.seek(currentTime * 1000);
            }
        },
        toggleFullscreen() {
            this.setFullscreen(!this.fullscreen);
        },

        changeMode() {
            const mode = this.mode + 1 === 4 ? 1 : this.mode + 1;
            this.setPlayMode(mode);
            let playlist = [];
            if (mode === playMode.random.value) {
                playlist = shuffle(this.originalList);
            } else {
                playlist = this.originalList;
            }
            const index = playlist.findIndex(item => {
                return item.id === this.currentSong.id;
            })
            this.setCurrentIndex(index);
            this.setPlaylist(playlist);
        },
        prevSong() {
            if (!this.songReady) return;
            if (this.playlist.length === 1) {
                this.loop();
                return;
            } else {
                let index = this.currentIndex - 1;
                if (index === -1) index = this.playlist.length - 1;
                this.setCurrentIndex(index);
                if (!this.playing) this.togglePlayingState();
            }
        },
        togglePlayingState() {
            if (!this.songReady) return;
            this.setPlayingState(!this.playing);
            if (this.currentLrc) this.currentLrc.togglePlay();
        },
        nextSong() {
            if (!this.songReady) return;
            if (this.playlist.length === 1) {
                this.loop();
                return;
            } else {
                let index = this.currentIndex + 1;
                if (index === this.playlist.length) index = 0;
                this.setCurrentIndex(index)
                if (!this.playing) this.togglePlayingState();
            }
        },
        toggleFavorite() {
            this.saveFavoriteList(this.currentSong);
        },
        // 单曲循环
        loop() {
            this.$refs.audio.currentTime = 0;
            this.$refs.audio.play();
            this.setPlayingState(true);
            if (this.currentLrc) this.currentLrc.seek(0);
        },
        showPlaylist() {
            this.$refs.playlist.show();
        },

        audioReady() {
            this.songReady = true;
            this.savePlayHistory(this.currentSong);
        },
        audioTimeUpdate(e) {
            this.currentTime = e.target.currentTime;
        },
        audioEnded() {
            if (this.mode === playMode.loop.value) {
                this.loop();
            } else {
                this.nextSong();
            }
        },
        audioError() {
            this.toast('Sorry, 系统开小差了, 请刷新页面重试');
        },

        getLrc() {
            const { id } = this.currentSong;
            const { lrcCacheObj } = this;
            if (lrcCacheObj[id]) return Promise.resolve(lrcCacheObj[id]);
            return new Promise((resolve, reject) => {
                this.$http.get('lrc-detail?id=' + id).then(res => {
                    const lrc = Base64.decode(res.data) || '';
                    if (lrc) {
                        lrcCacheObj[id] = lrc;
                        resolve(lrc);
                    } else {
                        reject('Sorry, 暂无此歌曲版权');
                    }
                });
            });
        },
        handleLrc({ lineNum, txt }) {
            this.currentLrcLineNum = lineNum;
            this.playingLrc = txt;
            if (lineNum > 3) {
                const lineEl = this.$refs.lrcLine[lineNum - 3];
                this.$refs.scrollView.scrollToElement(lineEl, 1000);
            } else {
                this.$refs.scrollView.scrollTo(0, 0, 1000);
            }
        }
    },
    filters: {
        duration(v) {
            const result = parseInt(v);
            const m = Math.floor((result / 60 % 60)) < 10 ? '0' + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60));
            const s = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60));
            return `${m}:${s}`;
        }
    }
}
</script>

<style lang="sass" scoped>
@import '~@/assets/style/music-player.sass';
</style>
