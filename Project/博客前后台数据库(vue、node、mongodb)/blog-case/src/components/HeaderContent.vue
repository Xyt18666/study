<template>
    <div class="header_content">
        <el-row>
            <el-col :span="24" class="banner">
                <img src="../../public/images/banner.png" alt="" />
            </el-col>
            <el-col :span="24" class="nav">
                <el-row class="nav_content">
                    <el-link>首页</el-link>
                    <el-link>HTML5</el-link>
                    <el-link>CSS</el-link>
                    <el-link>JAVASCRIPT</el-link>
                    <el-link>PHP</el-link>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {};
</script>

<style lang="sass">

.banner
  img
    width: 100%

.nav
  background: #fff

  float: none !important
  .nav_content
    width: 960px !important
    margin: 0 auto !important
    display: flex
    height: 50px
    justify-content: space-between
</style>
