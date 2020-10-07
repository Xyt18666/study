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


</template>

<script>
export default {};
</script>

<style></style>
