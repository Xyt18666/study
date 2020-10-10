<template lang="pug">
#app
  header 头
  nav 
    router-link(to="/home") home
  main
    router-view
  aside
    mini-music-content

  

</template>
<script>
import MiniMusicContent from "@/components/MiniMusicContent.vue";
export default {
    components: {
        MiniMusicContent,
    },
    created() {
        this.$http.get("/api/hit-single-list").then(d => {
            // console.log(d.data.data);
            this.$store.dispatch("setHitList", d.data.data);
            this.$store.commit("setMiniPlaer", d.data.data[0]);
        });
    },
};
</script>

<style lang="scss">
* {
    box-sizing: border-box;
}
ul,
li {
    list-style: none;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100vw;
    height: 100%;
    overflow: hidden;
}
</style>
