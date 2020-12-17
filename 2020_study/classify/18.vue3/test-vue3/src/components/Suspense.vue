<template>
  <div class="mian">
    <Suspense>
      <template #default>
        <!-- <p>请求成功的组件</p> -->
        <async-show> </async-show>
      </template>

      <template #fallback>
        <p>LONGING,,,,,</p>
      </template>
    </Suspense>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AsyncShow from './AsyncShow.vue';
export default defineComponent({
  components: { AsyncShow },
});
</script>

<style></style>
