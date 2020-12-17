<template>
  <teleport to="#tele">
    <p>
      瞬移组件
      <span>inject{{ xx }}</span>
    </p>
  </teleport>
</template>

<script>
import { defineComponent, inject } from 'vue';
export default defineComponent({
  setup() {
    let xx = inject('x');
    return {
      xx,
    };
  },
});
</script>

<style></style>
