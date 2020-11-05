<template lang="pug">
.user-container
    scroll-view(ref="scrollView")
        ul.tab
            li(
                v-for="(d, i) in tabList",
                :key="i",
                :class="{ 'active': activeIndex === i }",
                @click="activeIndex = i"
            ) {{ d }}
        song-list(
            v-show="activeIndex === 0",
            :list="favoriteList",
            @click="insertSong"
        )
        song-list(
            v-show="activeIndex === 1",
            :list="playHistory",
            @click="insertSong"
        )
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import SongList from '@/components/SongList.vue';

export default {
    components: { SongList },
    data() {
        return {
            tabList: ['我收藏的', '最近听的'],
            activeIndex: 0
        }
    },
    computed: {
        ...mapGetters([
            'playHistory',
            'favoriteList'
        ])
    },
    watch: {
        playHistory() {
            this.refreshScrollView();
        },
        favoriteList() {
            this.refreshScrollView();
        },
        activeIndex() {
            this.refreshScrollView();
        }
    },
    methods: {
        ...mapActions(['insertSong']),
        refreshScrollView() {
            this.$refs.scrollView.refresh();
        }
    }
}
</script>

<style lang="sass" scoped>
.user-container
    top: 100px
    .tab
        display: flex
        margin: 20px 20px 0
        border: 1px solid #2c50a1
        border-radius: 5px
        li
            flex: 1
            line-height: 30px
            text-align: center
            font-size: 14px
            color: #999
            transition: background-color, color .3s
            & + li
                border-left: 1px solid #2c50a1
            &.active
                background-color: #2c50a1
                color: #fff

</style>
