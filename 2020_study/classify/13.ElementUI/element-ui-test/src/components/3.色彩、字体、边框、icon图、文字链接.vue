<template>
    <div class="conent">
        <h1>色彩、字体、边框、icon图、文字链接</h1>
        <i class="el-icon-edit"></i>
        <i class="el-icon-share"></i>
        <i class="el-icon-delete"></i>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <div>
            <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
            <el-link type="primary">主要链接</el-link>
            <el-link type="success">成功链接</el-link>
            <el-link type="warning">警告链接</el-link>
            <el-link type="danger">危险链接</el-link>
            <el-link type="info">信息链接</el-link>
        </div>
        <div>
            <el-link :underline="false">无下划线</el-link>
            <el-link>有下划线</el-link>
        </div>
        <div>
            <el-link icon="el-icon-edit">编辑</el-link>
            <el-link>
                查看
                <i class="el-icon-view el-icon--right"></i>
            </el-link>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss"></style>
