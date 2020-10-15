<template lang="pug">
.singer-detail-container.lm-fixed-container
    arrow-btn.back-btn(arrow-type="left", @click.native="$router.back()")
    data-loading(v-if="loading", :style="{ 'margin-top': '10px' }")
    .title-container
        h1.lm-ellipsis {{ singerDetail.name }}
    .bg-avatar-container(ref="bgAvatar", :style="bgAvatarStyle")
        .play-btn(v-show="!loading", @click="randomPlayCopyright") 随机播放全部有版权歌曲
    .bg-color-container(
        :style="{ 'transform': `translate3d(0, ${translateY}px, 0)` }"
    )
    scroll-view(
        ref="scrollView",
        :scroll-data="singerDetail.songList",
        :style="{ 'top': bgAvatarHeight + 'px', 'bottom': gap }",
        :probe-type="3",
        @scroll="onScroll"
    )
        song-list(:list="singerDetail.songList", @click="selectItem", copyright)
</template>

<script>
import { mapActions } from 'vuex';
import gapMixin from '@/assets/mixin/gap.js';
import SongList from '@/components/SongList.vue';

const TITLE_HEIGHT = 50;

export default {
    name: 'SingerDetail',
    components: { SongList },
    mixins: [gapMixin],
    data() {
        return {
            loading: true,
            id: this.$route.params.id,
            singerDetail: {
                songList: []
            },
            bgAvatarHeight: 0,
            translateY: 0,
            scale: 1
        }
    },
    computed: {
        bgAvatarStyle() {
            let style = { transform: `scale(${this.scale})` };
            if (this.singerDetail.avatar) {
                style['background-image'] = `url(${this.singerDetail.avatar})`;
            }
            return style;
        }
    },
    mounted() {
        this.bgAvatarHeight = this.$refs.bgAvatar.clientHeight;
        this.$http.get('singer-detail', {
            params: {
                id: this.id
            }
        }).then(res => {
            this.singerDetail = res.data || {};
            this.loading = false;
        });
    },
    methods: {
        ...mapActions(['insertSong', 'randomPlay']),
        randomPlayCopyright() {
            this.randomPlay(this.singerDetail.songList.filter(song => song.url));
        },
        selectItem(item, index) {
            if (!item.url) {
                return this.toast('Sorry, 暂无此歌曲版权');
            }
            this.insertSong(item);
        },
        refreshScrollView() {
            this.$refs.scrollView.refresh();
        },
        onScroll({ y }) {
            this.scale = y > 0 ? 1 + y / this.bgAvatarHeight : 1;
            this.translateY = Math.max(TITLE_HEIGHT - this.bgAvatarHeight, y);
            const bgAvatar = this.$refs.bgAvatar;
            if (y < TITLE_HEIGHT - this.bgAvatarHeight) {
                bgAvatar.style.paddingTop = 0;
                bgAvatar.style.height = TITLE_HEIGHT + 'px';
                bgAvatar.style.zIndex = 1;
                bgAvatar.querySelector('.play-btn').style.display = 'none';
            } else {
                bgAvatar.style.paddingTop = '60%';
                bgAvatar.style.height = 0;
                bgAvatar.style.zIndex = 0;
                bgAvatar.querySelector('.play-btn').style.display = '';
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.singer-detail-container
    background: #241b3c
    z-index: 99
    .back-btn
        position: absolute
        z-index: 2
    .title-container
        position: absolute
        top: 10px
        right: 60px
        bottom: auto
        left: 60px
        z-index: 2
        h1
            line-height: 2em
            text-align: center
            font-size: 16px
            font-weight: bold
    .bg-avatar-container
        position: relative
        width: 100%
        height: 0
        padding-top: 60%
        background-repeat: no-repeat
        background-position: top
        background-size: cover
        transform-origin: 50% 0
        &:before
            content: ''
            position: absolute
            top: 0
            right: 0
            bottom: 0
            left: 0
            background-color: rgba(0, 0, 0, .4)
        .play-btn
            position: absolute
            bottom: 20px
            left: 50%
            transform: translateX(-50%)
            width: 210px
            line-height: 1em
            padding: 6px 0 6px 14px
            border: 1px solid #fff
            border-radius: 13px
            text-align: center
            font-size: 14px
            opacity: .8
            background: url(~@/assets/img/icon-play.png) no-repeat 12px center
            background-size: 12px

    .bg-color-container
        position: relative
        height: 100%
        background: #241b3c
    .scroll-view-container
        position: fixed
        top: 0
        right: 0
        bottom: 0
        left: 0
        height: auto
        overflow: visible
</style>
