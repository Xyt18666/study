<template lang="pug">
.release-masg 
  textarea(ref="text")
  .send(@click="sendmasg") 发布
</template>

<script>
export default {
  props: [],
  components: {},
  methods: {
    sendmasg() {
      this.$emit("setmasg", {
        time: new Date().toLocaleString(),
        contenttext: this.$refs.text.value,
        lick:false
      });
      this.$emit("close", false);
    },
  },
};
</script>

<style scoped lang="sass">

.release-masg
    position: fixed
    z-index: 999
    top: 0
    left: 0
    width: 100vw
    height: 100vh
    background: rgba(0,0,0,0.8)
    textarea
        display: block
        resize: none
        width: 80vw
        margin: 200px auto
        height: 20vw
    .send
        position: absolute
        bottom: 15vh
        left: 0
        width: 100vw
        height: 5vh
        line-height: 5vh
        text-align: center
        background: #0f0
</style>
