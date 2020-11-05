<template>
<div class="dictionary-wrapper">
    <h1 class="title">系统字典</h1>
    <el-tabs type="border-card">
        <el-tab-pane
            v-for="(d, i) in list"
            :key="i"
            :label="d.label"
        >
            <dictionary-list
                :type="d.type"
            ></dictionary-list>
        </el-tab-pane>
    </el-tabs>
</div>

</template>

<script>
// import axios from 'axios';
import DictionaryList from '@/components/DictionaryList.vue';
export default {
    components: { DictionaryList },
    data() {
        return {
            list: [{
                label: '未入库设备状态',
                type: 'preStatusList'
            }, {
                label: '已入库设备状态',
                type: 'equipStatusList'
            }, {
                label: '设备分类',
                type: 'categoryList'
            }]
        }
    },
    created() {

    }
};
</script>

<style lang="sass">
.dictionary-wrapper
    padding-right: 20px


</style>
