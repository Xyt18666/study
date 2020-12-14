<template>
    <el-container>
        <el-row>
            <el-col :span="24">
                <el-radio-group style="margin-bottom: 20px;">
                    <!-- 
                        isCollapse控制显示与隐藏
                     -->
                    <el-button
                        type="primary"
                        icon="el-icon-s-grid"
                        @click.native="isCollapse = !isCollapse"
                    ></el-button>
                </el-radio-group>

                <el-menu
                    default-active="1-1-1"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    :collapse="isCollapse"
                    router
                >
                    <!-- 
                    default-active="1-4-1"  默认展开到  1-4-1的项

                    @open="handleOpen"          折叠时触发，返回折叠的数值  1-4
                    @close="handleClose"


                 -->

                    <!-- 
                    router 开启路由模式，点击导航 切换路由



                  -->
                    <el-submenu index="1">
                        <!-- 
                        el-submenu  内部有折叠项的 子项
                        index="/hoems/xx"  此时的标识就是要跳转的路由
        
                     -->
                        <template slot="title">
                            <!-- 一级导航的展示 -->
                            <i class="el-icon-location"></i>
                            <span slot="title">导航一</span>
                        </template>
                        <!-- <el-menu-item-group>
                           分组 
                            <span slot="title">分组一</span>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group> -->
                        <el-submenu index="1-1">
                            <span slot="title">选项1</span>
                            <el-menu-item index="1-1-1">选项1-1-1</el-menu-item>
                        </el-submenu>
                        <!-- 
                            el-submenu  子项
                            index="1-1"  标识

                         -->
                        <el-submenu index="1-2">
                            <span slot="title">选项2</span>
                            <el-menu-item index="1-2-1">选项1-2-1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </el-container>
</template>

<script>
/*
功能：
折叠导航
路由跳转导航




*/

export default {
    data() {
        return {
            isCollapse: true,
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
    },
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>
