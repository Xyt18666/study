<template>
    <div class="main">
        <h1>测试i18n</h1>
        <h1 style="font-size: 16px; text-align: center;">{{ $t("message.hello") }}</h1>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$i18n.locale);
    },
};
</script>

<style></style>
