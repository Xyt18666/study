<template lang="pug">
.main
    top-header 
    .main2
        slide-bar
        .content
            router-view

</template>

<script>
import TopHeader from "@/components/TopHeader";
import SlideBar from "@/components/SlideBar";

export default {
  components: {
    TopHeader,
    SlideBar
  }
};
</script>

<style lang="sass">
.main2
  display: flex
  .content
    width: 100%
</style>
