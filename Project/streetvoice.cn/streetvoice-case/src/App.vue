<template>
  <div id="app">
    <home></home>
    <global-player></global-player>
    <player></player>
  </div>
</template>

<script>
import Home from "@/views/Home.vue";
import GlobalPlayer from "@/components/GlobalPlayer.vue";
import Player from "@/components/Player.vue";

export default {
  components: {
    Home,
    GlobalPlayer,
    Player,
  },
};
</script>
<style lang="scss"></style>
