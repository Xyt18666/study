<template lang="pug">
    .content
        p {{this.$route.params.w}}
        p {{this.$route.params.q}}
        <router-view />

</template>

<script>
export default {};
</script>

<style></style>
