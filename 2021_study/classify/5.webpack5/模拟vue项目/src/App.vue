<template>
    <div class="content">
        <h1>vue文件</h1>
        <p>{{ key }}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            key: "val",
        };
    },
};
</script>

<style>
h1 {
    background: #777;
}
</style>
