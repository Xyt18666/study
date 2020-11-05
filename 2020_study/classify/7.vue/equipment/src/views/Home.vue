<template lang="pug">
.home-container.lm-fixed-container(:style="{ 'bottom': gap }")
    scroll-view(
        ref="scrollView",
        :scroll-data="hitSingleList"
    )
        slider-view(@ready="refreshScrollView")
        .hit-single-container
            h2 热门单曲推荐
            data-loading(v-if="loading")
            .hit-single-list
                .hit-single-item(
                    v-for="(d, i) in hitSingleList",
                    :key="i",
                    @click="onSelectItem(d, i)"
                )
                    .l.lm-bg-cover(v-lazy:background-image="d.cover")
                    .r
                        .song.lm-ellipsis {{ d.song }}
                        .album.lm-ellipsis {{ d.singer }} - {{ d.album }}
</template>

<script>
import { mapActions } from 'vuex';
import gapMixin from '@/assets/mixin/gap.js';
import SliderView from '@/components/SliderView.vue';

export default {
    components: { SliderView },
    mixins: [gapMixin],
    data() {
        return {
            loading: true,
            hitSingleList: []
        }
    },
    mounted() {
        this.$http.get('hit-single-list').then(res => {
            this.hitSingleList = res.data || [];
            this.loading = false;
        });
    },
    methods: {
        ...mapActions(['selectPlay']),
        onSelectItem(item, index) {
            this.selectPlay({
                list: this.hitSingleList,
                index
            });
        },
        refreshScrollView() {
            this.$refs.scrollView.refresh();
        }
    }
};
</script>

<style lang="sass" scoped>
.home-container
    top: 100px
    .hit-single-container
        padding: 20px
        h2
            height: 30px
            line-height: 1em
            font-size: 16px
            opacity: .8
        .hit-single-item
            display: flex
            align-items: center
            height: 65px
            .l
                flex: 0 0 50px
                height: 50px
                border-radius: 3px
                border: 1px solid #5a485f
            .r
                flex-grow: 1
                padding-left: 15px
                overflow: hidden
                .song
                    font-size: 14px
                .album
                    font-size: 12px
                    opacity: .4
</style>
