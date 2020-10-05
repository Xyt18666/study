<template lang="pug">
.c-b
  p(@click="goHom") b组件
</template>

<script>
export default {
  methods: {
    goHom() {
      window.eventBus.$emit("goHome", "b to a");
    },
  },
};
</script>

<style lang="sass" scoped>
p
  background: red

</style>