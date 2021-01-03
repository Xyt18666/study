<template>
    <div id="app">
        <div id="nav">
            <router-link to="/h">Hellowolrd</router-link>
        </div>
        <router-view />
        <p>index</p>
        <p>{{ $store.state.indexNum }}</p>
        <a href="./page1.html">to page1</a>
        <div class="ab" @click="toAb">to about</div>
    </div>
</template>
<script>
export default {
    methods: {
        toAb() {
            this.$router.push({
                name: "About",
                params: {
                    data: "sdfa",
                },
            });
        },
    },
};
</script>
<style lang="scss"></style>
