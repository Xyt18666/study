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
    plaer-continer

  

</template>
<script>
import MiniMusicContent from "@/components/MiniMusicContent.vue";
import HeaderBox from "@/components/HeaderBox.vue";
import NavBox from "@/components/NavBox.vue";
import PlaerContiner from "@/components/PlaerContiner.vue";

import { mapActions, mapMutations } from "vuex";

export default {
    components: {
        MiniMusicContent,
        HeaderBox,
        NavBox,
        PlaerContiner,
    },
    computed: {},
    methods: {
        ...mapMutations(["setBannerLoading"]),
        ...mapActions(["setSliderList", "getMiniPlaer"]),
    },
    beforeCreated() {
      

    },
    created() {
        const getDataArr = [this.setSliderList(), this.getMiniPlaer()];

        Promise.all(getDataArr).then(() => {
            this.setBannerLoading(false);
        });
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
    background-size: cover
</style>
