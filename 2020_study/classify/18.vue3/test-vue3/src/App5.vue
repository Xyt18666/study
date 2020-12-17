<template>
  <div class="test">
    <h1>综合测试</h1>
    <test-component></test-component>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import TestComponent from './components/TestComponent.vue';

export default defineComponent({
  name: 'App5',
  components: { TestComponent },
  setup() {},
});
</script>

<style></style>
