<template lang="pug">
  .main-content
   
    input(
        type="text"
        ref="w"
    )
    input(
        type="password"
        ref="p"
    )
    button(
        @click="long"
    ) 提交
</template>

<script>
export default {
    data() {
        return {
            use: [],
        };
    },
    methods: {
        long() {
            // this.use.push({
            //     w: this.$refs.w.value,
            //     p: this.$refs.p.value,
            // });

            this.$router.push({
                name: "Xxx",
                params: {
                    w: this.$refs.w.value,
                    p: this.$refs.p.value,
                },
            });
            console.log(this.$route.matched);
        },
    },
};
</script>

<style lang="sass"></style>
