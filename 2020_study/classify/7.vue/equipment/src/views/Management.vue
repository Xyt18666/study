<template>
<div class="management-wrapper">
    <div class="l">
        <h1 class="title">设备管理</h1>
        <search-form
            @search="onSearch"
        ></search-form>
    </div>
    <div class="r">
        <div class="t">
            <div class="color-list">
                <div
                    class="color-item"
                    v-for="item in $store.state.equipStatusList"
                    :key="item.id"
                >
                    {{ item.name }}
                    <span
                        class="color-box"
                        :style="{ 'background-color': item.color }"
                    ></span>
                </div>
            </div>
        </div>
        <div class="c" v-loading="loading">
            <el-table
                :data="list"
                style="width: 100%"
            >
                <el-table-column
                    prop="id"
                    label="设备编号"
                ></el-table-column>
                <el-table-column
                    prop="name"
                    label="设备名称"
                ></el-table-column>
                <el-table-column
                    prop="status"
                    label="设备状态"
                >
                    <template slot-scope="scope">
                        {{ getStatusInfo(scope.row.status).name }}
                        <span
                            class="color-box"
                            :style="{ 'background-color': getStatusInfo(scope.row.status).color }"
                        ></span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="category"
                    label="设备分类"
                >
                    <template slot-scope="scope">
                        {{ ($store.getters.categoryObj[scope.row.category] || {}).name }}
                    </template>
                </el-table-column>
                <el-table-column
                    prop="number"
                    label="设备数量"
                ></el-table-column>
                <el-table-column
                    prop="price"
                    label="设备单价"
                ></el-table-column>
                <el-table-column
                    prop="time"
                    label="购置时间"
                ></el-table-column>
                <el-table-column
                    label="操作"
                    width="150"
                >
                    <template slot-scope="scope">
                        <el-button size="mini" @click="viewDetail(scope.row.id)">详情</el-button>
                        <template v-if="scope.row.status !== 'STATUS6'">
                            <el-button size="mini" type="primary" @click="viewSet(scope.row)">更改状态</el-button>
                        </template>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="b">
            <el-pagination
                @size-change="onPageSizeChange"
                @current-change="onPageNoChange"
                :current-page="pageNo"
                :page-sizes="[10, 20, 50, 100]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next"
                :total="total"
            ></el-pagination>
        </div>
    </div>

    <equip-set
        :visible.sync="setVisible"
        :equip="currentEquip"
        @success="getList"
    ></equip-set>
</div>
</template>

<script>
import axios from 'axios';
import SearchForm from '@/components/SearchForm.vue';
import EquipSet from '@/components/EquipSet.vue';

export default {
    components: { SearchForm, EquipSet },
    data() {
        return {
            total: 0,
            list: [],
            pageNo: 1,
            pageSize: 10,
            searchData: {},
            loading: true,
            setVisible: false,
            currentEquip: {}
        }
    },
    methods: {
        getStatusInfo(id) {
            return this.$store.getters.equipStatusObj[id];
        },
        viewDetail(id) {
            // this.$router.push('/main/management-detail/' + id);
        },
        viewSet(row) {
            this.currentEquip = row;
            this.setVisible = true;
        },
        onSearch(searchData) {
            this.pageNo = 1;
            this.searchData = searchData;
            this.getList();
        },
        getList() {
            this.loading = true;
            axios.post('/equipment/equip-list', {
                pageNo: this.pageNo,
                pageSize: this.pageSize,
                ...this.searchData
            }).then(({ data }) => {
                this.list = data.data.list;
                this.total = data.data.total;
                this.loading = false;
            });
        },
        onPageSizeChange(pageSize) {
            this.pageSize = pageSize;
            this.getList();
        },
        onPageNoChange(pageNo) {
            this.pageNo = pageNo;
            this.getList();
        }
    },
    created() {
        this.getList();
    }
};
</script>

<style lang="sass">
.management-wrapper
    display: flex
    .l
        flex: 0 0 300px
    .r
        flex: 1 1 auto
        margin: 0 20px
        .t
            display: flex
            justify-content: flex-end
            height: 60px
            align-items: center
            padding-right: 20px
        .b
            padding: 10px 0
    .color-list
        display: flex
    .color-box
        display: inline-block
        width: 10px
        height: 10px
        margin-right: 10px
    .cell
        .el-button
            padding: 5px
            & + .el-button
                margin-left: 5px
</style>
