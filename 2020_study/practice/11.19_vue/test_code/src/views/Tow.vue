<template>
    <div class="tow">
        <el-transfer v-model="value" :data="data"></el-transfer>
        <el-tree
            :data="data2"
            show-checkbox
            node-key="id"
            :default-expanded-keys="[2, 3]"
            :default-checked-keys="[5]"
            :props="defaultProps"
        ></el-tree>
        <p>--------------------</p>

        <div style="text-align: center">
            <el-transfer
                style="text-align: left; display: inline-block"
                v-model="value4"
                filterable
                :left-default-checked="[2, 3]"
                :right-default-checked="[1]"
                :titles="['Source', 'Target']"
                :button-texts="['到左边', '到右边']"
                :format="{
                    noChecked: '${total}',
                    hasChecked: '${checked}/${total}',
                }"
                @change="handleChange"
                :data="data"
            >
                <span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>
                <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
                <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
            </el-transfer>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        const generateData = () => {
            const data = [];
            for (let i = 1; i <= 10; i++) {
                data.push({
                    key: i,
                    label: `备选项 ${i}`,
                });
            }
            return data;
        };
        return {
            data: generateData(),
            value: [1, 4],
            br: "------------------",
            data2: [
                {
                    id: 1,
                    label: "一级 1",
                    children: [
                        {
                            id: 4,
                            label: "二级 1-1",
                            children: [
                                {
                                    id: 9,
                                    label: "三级 1-1-1",
                                },
                                {
                                    id: 10,
                                    label: "三级 1-1-2",
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 2,
                    label: "一级 2",
                    children: [
                        {
                            id: 5,
                            label: "二级 2-1",
                        },
                        {
                            id: 6,
                            label: "二级 2-2",
                        },
                    ],
                },
                {
                    id: 3,
                    label: "一级 3",
                    children: [
                        {
                            id: 7,
                            label: "二级 3-1",
                        },
                        {
                            id: 8,
                            label: "二级 3-2",
                        },
                    ],
                },
            ],
            defaultProps: {
                children: "children",
                label: "label",
            },
            br2: "------------------",
            value4: [1],
        };
    },
};
</script>
<style lang="sass"></style>
