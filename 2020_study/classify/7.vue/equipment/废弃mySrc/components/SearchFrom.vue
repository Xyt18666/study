<template lang="pug">
.search-form
    h2 设备检索
    el-form(
        label-width="80px"
        :model="searchForm"
    )
        el-form-item(label="设备编号")
            el-input(
                v-model="searchForm.id"
            )
        el-form-item(label="设备名称")
            el-input(
                v-model="searchForm.name"
            )
        el-form-item(label="设备状态")
            el-select(
                v-model="searchForm.status"
            )
        el-form-item(label="设备分类")
            el-select(
                v-model="searchForm.category"
            )
        el-form-item
            el-button(
                type="primary"
                @click="search"
            ) 查询
</template>

<script>
export default {
  data() {
    return {
      searchForm: {
        id: "",
        name: "",
        status: "",
        category: ""
      }
    };
  },
  methods: {
    search() {
      this.$emit("search", {
        ...this.searchForm
      });
    }
  }
};
</script>

<style></style>
