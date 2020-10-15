<template lang="pug">
  .banner-content
    data-loading(v-if="bannerLoading")
    .swiper-container
        .swiper-wrapper
            .swiper-slide(
                v-for="item,index in sliderListMsg"
                :key="index"
            )
                a(
                    :href="item.link"
                    title="title"
                ) 
                    img(
                        :src="item.image"
                    )
        .swiper-pagination

        
                    
                

</template>

<script>
import "swiper/swiper-bundle.css";
import Swiper, { Pagination } from "swiper";
Swiper.use([Pagination]);

import { mapState } from "vuex";

export default {
    data() {
        return {};
    },
    computed: {
        ...mapState(["sliderListMsg", "bannerLoading"]),
    },
    mounted() {
        this.$nextTick(() => {
            let swiper = new Swiper(".swiper-container", {
                direction: "horizontal",
                autoplay: true,
                speed: 300,
                loop: true,
                pagination: {
                    el: ".swiper-pagination",
                },
            });
            console.log(swiper);
        });
    },
};
</script>

<style lang="sass">
.swiper-container
    width: 100%
    .swiper-wrapper
        width: 100%
        .swiper-slide
            width: 100%
            a
                width: 3.35rem
                display: block
                margin: 0 auto
                img
                    width: 3.35rem
                    border-radius: 0.05rem

    .swiper-pagination-bullet
        width: 0.08rem
        height: 0.08rem
        background: #000
        opacity: 0.2
        margin-right: 0.06rem
    .swiper-pagination-bullet-active
        width: 0.16rem
        height: 0.08rem
        background: #2C50A1
        border-radius: 0.08rem
        opacity: 0.6
        margin-right: 0.06rem
</style>
