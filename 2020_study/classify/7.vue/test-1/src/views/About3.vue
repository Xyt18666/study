<template lang="pug">
.about
    p about3
    ul
        li 
          router-link( to="/about3/" @click.native="actives=1" :class="[actives==1?'active':'']") 二级路由1
        li 
          router-link( to="/about3/child2" @click.native="actives=2" :class="[actives==2?'active':'']") 二级路由2
        li 
          router-link( to="/about3/child3?id=001" @click.native="actives=3" :class="[actives==3?'active':'']") 二级路由3


    router-view
</template>
<script>
export default {
    data() {
        return {
            actives: 1,
        };
    },
    beforeCreate() {
        if (this.$store.state.data === "") {
            console.log("跳转 longin");
            this.$router.push("/longin");
        } else {
            console.log(11);
        }
    },
};
</script>
