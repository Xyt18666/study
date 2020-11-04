<template>
<div class="register-add-wrapper">
    <h1 class="title">设备登记添加</h1>
    <el-form :model="formData" :rules="rules" :label-position="right" ref="addForm" label-width="100px">
        <el-form-item label="设备名称：" prop="name">
            <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="设备分类：" prop="category">
            <el-select v-model="formData.category">
                <el-option
                    v-for="item in $store.state.categoryList"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                ></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="设备数量：" prop="number">
            <el-input v-model="formData.number"></el-input>
        </el-form-item>
        <el-form-item label="设备单价：" prop="price">
            <el-input v-model="formData.price"></el-input>
        </el-form-item>
        <el-form-item label="购置日期：" prop="time">
            <el-date-picker
                v-model="formData.time"
                type="date"
                value-format="yyyy-MM-dd"
            ></el-date-picker>
        </el-form-item>
    </el-form>
    <div class="btn-list">
        <el-button @click="save" type="primary">保存</el-button>
        <el-button @click="$router.back()">返回列表</el-button>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        const checkNumber = (rule, value, callback) => {
            if (!/^\+?[1-9][0-9]*$/.test(value)) {
                callback(new Error('设备数量必须为大于0的整数'));
            } else {
                callback();
            }
        };
        return {
            formData: {
                name: '',
                category: '',
                number: '',
                price: '',
                time: ''
            },
rules: {
    name: [
        { required: true, message: '请输入设备名称', trigger: 'blur' }
    ],
    category: [
        { required: true, message: '请选择设备分类', trigger: 'change' }
    ],
    number: [
        { required: true, message: '请输入设备数量', trigger: 'blur' },
        { validator: checkNumber, trigger: 'blur' }
    ],
    price: [
        { required: true, message: '请输入设备单价', trigger: 'blur' }
    ],
    time: [
        { required: true, message: '请选择购置日期', trigger: 'blur' }
    ]
}
        }
    },
    methods: {
        save() {
            // 添加设备/POST：http://jxsjs.com/equipment/pre-add
            // 参数：name设备名称、status设备状态(传状态id)、category设备分类(传分类id)、number设备数量、price设备单价、time采购时间

            this.$refs.addForm.validate(valid => {
                if (valid) {
                    axios.post('/equipment/pre-add', this.formData).then(() => {
                        this.$message.success('添加成功');
                        this.$router.go(-1);
                    });
                } else {
                    this.$message.warning('表单未完成');
                }
            });

        }
    }
};
</script>

<style scoped lang="sass">
.el-form
    width: 300px
.el-select, .el-date-editor.el-input
    width: 100%
.btn-list
    margin-left: 20px
</style>
