<template lang="pug">
    .content
        p(
            @click="toA"
        ) {{this.$route.params.w}}
        p(
            @click="toB"
        ) {{this.$route.params.q}}
        <router-view />
        


</template>

<script>
export default {
    methods: {
        toA() {
            this.$router.push({
                name: "Aaa",
                params: {
                    ok: "aaao",
                },
            });
        },
        toB() {
            this.$router.push({
                name: "Bbb",
                params: {
                    ok: "bbbo",
                },
            });
        },
    },
};
</script>

<style></style>
