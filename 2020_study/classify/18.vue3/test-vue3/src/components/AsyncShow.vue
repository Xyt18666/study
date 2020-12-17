<template>
  <div class="mian">{{ code }}</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        return res({ code: 0 });
      }, 6000);
    });
  },
});
</script>

<style></style>
