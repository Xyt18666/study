<template>
    <div id="app">
        <!-- <div id="nav">
      <router-link to="/">Home</router-link> 
      |
      <router-link to="/about">About</router-link>
       |
      <router-link to="/list">list</router-link>
    </div>
    <router-view/> -->
        <!-- <main-content></main-content> -->
        <transition name="zj" mode="out-in">
            <router-view />
        </transition>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.zj-enter,
.zj-leave-to {
    opacity: 0;
}

.zj-enter-active,
.zj-leave-active {
    transition: opacity 1s;
}
.v-enter-to,
.v-leave {
    opacity: 1;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
