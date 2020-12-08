<template>
    <el-container>
        <el-header>
            <HeaderContent />
        </el-header>

        <el-main>
            <router-view></router-view>
        </el-main>
        <el-footer>
            <FooterContent />
        </el-footer>
    </el-container>
</template>

<script>
import HeaderContent from "@/components/HeaderContent";
import FooterContent from "@/components/FooterContent";

export default {
    components: {
        HeaderContent,
        FooterContent,
    },
    data() {
        return {};
    },
    created() {
        // this.getMsg();
    },
    methods: {
        getMsg() {
            console.log(this.$route.params.data);

            this.$http.post("http://localhost:8088/getmsg", this.$route.params.data).then(d => {
                console.log(d);
            });
        },
    },
    mounted() {},
};
</script>

<style lang="sass">
body
  background: #ccc
.el-header,.el-footer,.el-main
  padding: 0 !important
  height: auto !important
.el-main
  width: 960px
  height: 2000px !important
  margin: 0 auto
</style>
