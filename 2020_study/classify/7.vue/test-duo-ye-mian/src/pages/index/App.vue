<template>
    <div id="app">
        <div id="nav">
            <router-link to="/h">Hellowolrd</router-link>
        </div>
        <router-view />
        <p>index</p>
        <p>{{ $store.state.indexNum }}</p>
        <a href="/page1">to page1</a>
    </div>
</template>

<style lang="scss"></style>
