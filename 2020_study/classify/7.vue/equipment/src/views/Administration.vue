<template>
  <div class="register-wrapper">
    <div class="l">
      <h1 class="title">设备登记</h1>
      <search-from @search="onSearch"></search-from>
    </div>
    <div class="r">
      <div class="t">
        <el-button type="text" icon="el-icon-circle-plus" @click="onAdd"
          >登记新设备</el-button
        >
      </div>
      <div class="c" v-loading="loading">
        <el-table :data="list" style="width: 100%">
          <el-table-column prop="id" label="设备编号"></el-table-column>
          <el-table-column prop="name" label="设备名称"></el-table-column>
          <el-table-column prop="status" label="设备状态"></el-table-column>
          <el-table-column prop="category" label="设备分类"></el-table-column>
          <el-table-column prop="number" label="设备数量"></el-table-column>
          <el-table-column prop="price" label="设备单价"></el-table-column>
          <el-table-column prop="time" label="购置时间"></el-table-column>
          <el-table-column label="操作">
            <el-button>详情</el-button>
          </el-table-column>
        </el-table>

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
      <div class="b"></div>
    </div>
  </div>
</template>

<script>
import SearchFrom from "../components/SearchFrom";
export default {
  components: { SearchFrom },
  data() {
    return {
      total: 0,
      list: [],
      pageNo: 1,
      pageSize: 10,
      searchData: {},
      loading: true
    };
  },
  methods: {
    onAdd() {
      this.$router.push("main/register/registeradd");
    },
    onSearch(searchData) {
      this.pageNo = 1;
      this.searchData = searchData;
      this.getList();
    },
    getList() {
      this.loading = true;
      this.$http
        .post("/equipment/pre-list", {
          pageNo: this.pageNo,
          pageSize: this.pageSize,
          ...this.searchData
        })
        .then(({ data }) => {
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
    // 设备登记列表/POST：http://jxsjs.com/equipment/pre-list
    // 参数：pageNo当前页数1开始、pageSize每页条数、id设备编号、name设备名称、status设备状态(传状态id)、category设备分类(传分类id)
    this.getList();
  }
};
</script>

<style lang="sass"></style>
