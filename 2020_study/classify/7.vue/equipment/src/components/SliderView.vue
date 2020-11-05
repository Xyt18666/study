<template lang="pug">
.slider-view-container.swiper-container
    .swiper-wrapper
        .swiper-slide(
            v-for="(d, i) in swiperList",
            :key="i",
            @click="view(d.link)"
        )
            .img-wrapper
                img(:src="d.image")
    .swiper-pagination
</template>

<script>
import Swiper, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([Pagination]);
let _swiper = null;

export default {
    data() {
        return {
            swiperList: []
        }
    },
    mounted() {
        this.$http.get('slider-list').then(res => {
            this.swiperList = res.data || [];
            this.$nextTick(() => {
                const self = this;
                _swiper = new Swiper('.swiper-container', {
                    autoplay: {
                        delay: 2000
                    },
                    speed: 600,
                    direction: 'horizontal',
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets'
                    },
                    on: {
                        init() {
                            self.$emit('ready');
                        }
                    }
                });
            });
        });
    },
    beforeDestroy() {
        if (_swiper) {
            _swiper.destroy(true, true);
            _swiper = null;
        }
    },
    methods: {
        view(url) {
            window.location.href = url;
        }
    }
};
</script>

<style lang="sass" scoped>
.slider-view-container
    .swiper-slide
        .img-wrapper
            margin: 0 20px
            border-radius: 5px
            overflow: hidden
            img
                display: block
                width: 100%
                height: auto
    .swiper-pagination
        bottom: 3px
        /deep/ .swiper-pagination-bullet
            background: #fff
            &-active
                width: 16px
                border-radius: 4px
                background: #2c50a1
                opacity: .6
</style>
