<template>
<el-dialog
    title="设置状态"
    :visible="visible"
    @close="$emit('update:visible', false)"
    :width="'320px'"
    :append-to-body="true"
>
    <div class="change-pw-form">
        <el-form label-width="100px">
            <el-form-item label="选择状态">
                <el-select v-model="status">
                    <el-option
                        v-for="item in $store.state.equipStatusList"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                        :disabled="item.id === equip.status"
                    ></el-option>
                </el-select>
            </el-form-item>
        </el-form>
    </div>
    <div slot="footer" class="dialog-footer">
        <el-button @click="$emit('update:visible', false)">取消</el-button>
        <el-button type="primary" @click="save" :loading="loading">确定</el-button>
    </div>
</el-dialog>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            loading: false,
            status: this.equip.status
        }
    },
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        equip: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    watch: {
        equip() {
            this.status = this.equip.status;
        }
    },
    methods: {
        save() {
            if (this.status === this.equip.status) {
                return this.$message.warning('状态未设置');
            }
            if (this.loading) return;
            this.loading = true;
            axios.post('/equipment/equip-set', {
                id: this.equip.id,
                status: this.status
            }).then(() => {
                this.$emit('update:visible', false);
                this.$emit('success');
                this.$message.success('状态设置成功');
                this.loading = false;
            });
        }
    }
};
</script>

<style lang="sass">

</style>
