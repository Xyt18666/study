<template lang="pug">
    .song
        p {{ this.$route.params.song}}
        p {{ this.$route.params.singer}}
        img(
            :src="this.$route.params.cover"
        )
        audio(
            controls
            :src="this.$route.params.url"
        )
        p {{this.$route.params}}
        p(
            @click="toCi($route.params.id)"
        )  歌词
        
        router-view

</template>

<script>
export default {
    methods: {
        toCi(idq) {
            this.$router.push({
                name: "Singerci",
                params: {
                    ids: idq,
                },
            });
        },
    },
};
</script>

<style lang="sass"></style>
