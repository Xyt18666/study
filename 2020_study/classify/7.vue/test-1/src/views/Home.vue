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
      router-link( to="/about" @click.native="active=1" :class="[active==1?'active':'']") 1
      router-link( to="/about2" @click.native="active=2" :class="[active==2?'active':'']") 2
      .box 扫码
      router-link( to="/about3" @click.native="active=3" :class="[active==3?'active':'']") 3
      router-link( to="/about4" @click.native="active=4" :class="[active==4?'active':'']") 4
     

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
            active: 1,
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
.active
    color: red
</style>
