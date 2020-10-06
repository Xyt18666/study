<template lang="pug">
   .msg msg
        p {{this.$route.params}}
        p {{this.$route.params.num}}
        p {{this.$route.query}}

        p(
            @click="toSun('给孙子参数')"
        ) to Sun
        router-view

        


</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        toSun(d) {
            this.$router.push({
                name: "Sunzi",
                params: {
                    text: d,
                },
            });
        },
    },
};
</script>

<style></style>
