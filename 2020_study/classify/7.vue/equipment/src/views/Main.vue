<template lang="pug">
.main
    top-header 
    .main
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

<style lang="sass"></style>
