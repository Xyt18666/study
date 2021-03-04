<template>
    <div class="home">
        <h1>home</h1>
        <p @click="$emit('toFa', 123)">子向父</p>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
