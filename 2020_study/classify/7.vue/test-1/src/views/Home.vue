<template lang="pug">
  .home
    .banner 
       .swiper-container
        .swiper-wrapper
            .swiper-slide(
                v-for="item,index in carouselArr"
                :key="index"
            )
                p(class="b_item") {{item.text}}
                   
        .swiper-pagination

    .router
      router-link( to="/about") 1
      router-link( to="/about2") 2
      .box 扫码
      router-link( to="/about3") 3
      router-link( to="/about4") 4
     

</template>

<script>
import HomeContent from "@/components/home-content.vue";

import "swiper/swiper-bundle.css";
import Swiper, { Pagination } from "swiper";
Swiper.use([Pagination]);

export default {
    name: "Home",
    components: {
        HomeContent,
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
    data() {
        return {
            carouselArr: [
                {
                    text: 1,
                },
                {
                    text: 2,
                },
                {
                    text: 3,
                },
                {
                    text: 4,
                },
                {
                    text: 5,
                },
            ],
        };
    },
};
</script>

<style lang="sass">
.swiper-container
  height: 220px
.b_item
  width: 100%
  height: 380px
  background: #777
  margin: 0
.router
  width: 100%
  position: fixed
  bottom: 0
  display: flex
  justify-content: space-around
</style>
