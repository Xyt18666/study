<template lang="pug">
  .hello 
    p(
     :style=`{ background:'red',color:'#0f0'}`
    ) 789
    h2(
      :style="{background:'pink',color:`#${'777'}`}"
    ) h222
    h3(
      :class="['a',ok?'b':'']"
    ) h333
    h4(
      :class="{'qq':true,'tt':false}"
    ) h444

</template>

<script>
export default {
    data() {
        return {
            ok: true,
        };
    },
    name: "HelloWorld",
    props: {
        msg: String,
    },
};
</script>

<style scoped lang="sass">
.a
  font-size: 36px
.b
  color: #515
.qq
  background: #000
.tt
  background: #777
</style>
