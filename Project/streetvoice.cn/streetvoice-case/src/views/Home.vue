<template>
  <div class="home">
    <top-bar></top-bar>
    <router-view></router-view>
    <bottom-navigation></bottom-navigation>
  </div>
</template>

<script>

import TopBar from "@/components/TopBar.vue";
import BottomNavigation from "@/components/BottomNavigation.vue";

export default {
  name: "Home",
  components: {
    TopBar,
    BottomNavigation,
 
  },
};
</script>
<style lang="scss">
h1 {
  background: #0f0;
}
</style>
