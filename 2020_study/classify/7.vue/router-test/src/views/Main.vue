<template lang="pug">
.main
    el-container
        el-header Header
        el-container
            el-aside(
                width="50px"
                class='as'
            ) Aside
            el-main(class='box')
                | Main
                el-tabs(:tab-position="tabPosition" style="height: 100%;")
                    el-tab-pane(label="aa") aa
                    el-tab-pane(label="bb") bb
              

</template>

<script>
export default {
    data() {
        return {
            tabPosition: "left",
        };
    },
    // beforeCreat() {
    //     if (document.cookie.indexOf() === -1) {
    //         this.$router.go(-1);
    //     } else {
    //         null;
    //     }
    // },
};
</script>

<style lang="sass"></style>
