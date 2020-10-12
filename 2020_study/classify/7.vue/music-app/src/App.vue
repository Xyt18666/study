<template lang="pug">
#app
  header
    HeaderBox
  nav
    NavBox
  main
    router-view
  aside
    mini-music-content
    

  

</template>
<script>
import MiniMusicContent from "@/components/MiniMusicContent.vue";
import HeaderBox from "@/components/HeaderBox.vue";
import NavBox from "@/components/NavBox.vue";

import { mapActions } from "vuex";

export default {
    components: {
        MiniMusicContent,
        HeaderBox,
        NavBox,
    },
    methods: {
        ...mapActions(["setSliderList"]),
    },
    created() {
        this.$http.get("/api/hit-single-list").then(d => {
            // console.log(d.data.data);
            this.$store.dispatch("setHitList", d.data.data);
            this.$store.commit("setMiniPlaer", d.data.data[0]);
        });
        this.setSliderList();
    },
};
</script>

<style lang="sass">
#app
    font-family: Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    width: 100vw
    height: 100%
    overflow: hidden
    background-image: url("assets/images/bg.png")
</style>
