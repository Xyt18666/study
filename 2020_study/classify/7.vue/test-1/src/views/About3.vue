<template lang="pug">
.about
    p about3
    ul
        li 
          router-link( to="/about3/") 二级路由1
        li 
          router-link( to="/about3/child2") 二级路由2
        li 
          router-link( to="/about3/child3") 二级路由3


    router-view
</template>
<script>
export default {
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
