<template lang="pug">
.c-a
  p a组件
</template>

<script>
export default {
  mounted() {
    window.eventBus.$on("goHome", (val) => {
      console.log(val);
    });
  },
};
</script>

<style lang="sass" scoped>
p
    background: #798

</style>