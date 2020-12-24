<template>
  <div class="recommend_play_button"></div>
</template>

<script>
export default {};
</script>

<style scoped>
.recommend_play_button {
  position: absolute;
  width: 40px;
  height: 40px;
  background: red;
  border-radius: 40px;
}
.recommend_play_button::before {
  content: "";
  display: block;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-25%, -50%);
}
</style>
