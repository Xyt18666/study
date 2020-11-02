<template>
    <div class="Checkbox">
        <h1>checkbox</h1>
        <!-- `checked` 为 true 或 false -->
        <el-checkbox v-model="checked">备选项</el-checkbox>
        <!-- <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox> -->
        <el-checkbox-group v-model="checkList">
            <el-checkbox label="复选框 A"></el-checkbox>
            <el-checkbox label="复选框 B"></el-checkbox>
            <el-checkbox label="复选框 C"></el-checkbox>
            <el-checkbox label="禁用" disabled></el-checkbox>
            <el-checkbox label="选中且禁用" disabled></el-checkbox>
        </el-checkbox-group>
        <div class="reverse">
            <el-checkbox
                :indeterminate="isIndeterminate"
                v-model="checkAll"
                @change="handleCheckAllChange"
            >
                全选
            </el-checkbox>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :label="city" :key="city">
                    {{ city }}
                </el-checkbox>
            </el-checkbox-group>
        </div>
        <el-checkbox-group v-model="checkedCities2" :min="1" :max="2">
            <el-checkbox v-for="city in cities2" :label="city" :key="city">{{ city }}</el-checkbox>
        </el-checkbox-group>
        <div>
            <el-checkbox-group v-model="checkboxGroup4">
                <el-checkbox-button v-for="city in cities3" :label="city" :key="city">
                    {{ city }}
                </el-checkbox-button>
            </el-checkbox-group>
        </div>
        <div>
            <el-checkbox v-model="checked1" label="备选项1" border></el-checkbox>
            <el-checkbox v-model="checked2" label="备选项2" border></el-checkbox>
        </div>
        <div style="margin-top: 20px">
            <el-checkbox-group v-model="checkboxGroup1" size="small">
                <el-checkbox label="备选项1" border></el-checkbox>
                <el-checkbox label="备选项2" border disabled></el-checkbox>
            </el-checkbox-group>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: true,
            checkList: ["选中且禁用", "复选框 A"],
            br: "-------------↓全选反选↓------------",
            checkAll: false,
            checkedCities: ["上海", "北京"],
            cities: ["上海", "北京", "广州", "深圳"],
            isIndeterminate: true,
            br2: "------------↓限制最大最小选择数↓--------------",
            checkedCities2: ["上海", "北京"],
            cities2: ["上海", "北京", "广州", "深圳"],
            br3: "------------↓按钮样式↓--------------",
            cities3: ["上海", "北京", "广州", "深圳"],
            checkboxGroup4: ["上海"],
            br4: "------------↓边框样式↓--------------",
            checked1: true,
            checked2: false,
            checkboxGroup1: [],
        };
    },
    methods: {
        handleCheckAllChange(val) {
            this.checkedCities = val ? this.cities : [];
            this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        },
    },
};
</script>

<style></style>
