<template>
    <div id="app">
        <div id="nav">
            <router-link to="/h">Hellowolrd</router-link>
        </div>
        <router-view />
        <p>index</p>
        <p>{{ $store.state.indexNum }}</p>
        <a href="./page1.html">to page1</a>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
p {
    color: $color;
}
</style>
