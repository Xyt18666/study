<template>
    <div class="swiper">
        <h1>swiper</h1>
        <swiper :options="swiperOption">
            <swiper-slide>slide1</swiper-slide>
            <swiper-slide>slide2</swiper-slide>
            <swiper-slide>slide3</swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
    components: {
        Swiper,
        SwiperSlide,
    },

    data() {
        return {
            swiperOption: {
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true, // 允许点击小圆点跳转
                },
                autoplay: true,
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            },
        };
    },
    mounted() {},
    methods: {},
};
</script>

<style>
.swiper-slide {
    height: 300px !important;
}
</style>
