<template lang="pug">
.search-container.lm-fixed-container
    .search-input-container
        input-box(
            ref="inputBox",
            placeholder="搜索歌曲",
            @query="search"
        )
    data-loading(v-if="loading", :style="{ 'margin-top': '20px' }")
    song-list(
        v-if="songList.length",
        :list="songList",
        @click="insertSong"
    )
    .hot-search-container(v-if="!loading && !songList.length")
        h2 热门搜索
        .hot-search-list
            .hot-search-item(
                v-for="(d, i) in hotSearchList",
                :key="i",
                @click="onSelectHot(d)"
            ) {{ d }}
</template>

<script>
import { mapActions } from 'vuex';
import { debounce } from '@/assets/lib/utils.js';
import InputBox from '@/components/InputBox.vue';
import SongList from '@/components/SongList.vue';

export default {
    components: { InputBox, SongList },
    data() {
        return {
            loading: false,
            songList: [],
            hotSearchList: []
        }
    },
    mounted() {
        this.getHotSearch();
    },
    methods: {
        ...mapActions(['insertSong']),
        getHotSearch() {
            this.$http.get('hot-search').then(res => {
                this.hotSearchList = res.data || [];
            });
        },
        search: debounce(function(keyword) {
            this.songList = [];
            if (!keyword) return;
            this.loading = true;
            this.$http.post('song-search', {
                keyword
            }).then(res => {
                this.songList = res.data || [];
                this.loading = false;
            });
        }, 300),
        onSelectHot(val) {
            this.$refs.inputBox.setQuery(val);
        }
    }
};
</script>

<style lang="sass" scoped>
.search-container
    top: 100px
    .search-input-container
        padding: 10px 20px 0
    .hot-search-container
        padding: 20px
        h2
            height: 30px
            line-height: 1em
            font-size: 16px
            opacity: .8
        .hot-search-item
            display: inline-block
            margin: 10px 10px 0 0
            padding: 5px 10px
            background: #333
            border-radius: 3px
            font-size: 12px
            opacity: .6

</style>
