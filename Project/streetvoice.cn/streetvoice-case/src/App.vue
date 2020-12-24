<template>
  <div id="app">
    <home></home>
    <global-player></global-player>
  </div>
</template>

<script>
import Home from "@/views/Home.vue";
import GlobalPlayer from "@/components/GlobalPlayer.vue";


export default {
  components: {
    Home,
    GlobalPlayer
  },
};
</script>
<style lang="scss"></style>
