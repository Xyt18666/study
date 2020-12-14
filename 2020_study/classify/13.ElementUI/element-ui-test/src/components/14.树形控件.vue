<template>
    <div class="tree">
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        <!-- 
        :data="data" 数据

        :props
            label	指定节点标签为节点对象的某个属性值	
            children	指定子树为节点对象的某个属性值

        node-click	节点被点击时的回调


     -->
        <el-tree
            :props="props"
            :load="loadNode"
            lazy
            show-checkbox
            @check-change="handleCheckChange"
        ></el-tree>
        <!-- 
        :load="loadNode"    加载子树数据的方法，仅当 lazy 属性为true 时生效
        lazy	是否懒加载子节点，需与 load 方法结合使用
        show-checkbox	节点是否可被选择



         -->

         <!-- 
        默认展开与选中：分别通过default-expanded-keys和default-checked-keys设置默认展开和默认选中的节点。需要注意的是，此时必须设置node-key，其值为节点数据中的一个字段名，该字段在整棵树中是唯一的。

         node-key="id"
        :default-expanded-keys="[2, 3]"
        :default-checked-keys="[5]"



          -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: [
                {
                    label: "一级 1",
                    children: [
                        {
                            label: "二级 1-1",
                            children: [
                                {
                                    label: "三级 1-1-1",
                                },
                            ],
                        },
                    ],
                },
                {
                    label: "一级 2",
                    children: [
                        {
                            label: "二级 2-1",
                            children: [
                                {
                                    label: "三级 2-1-1",
                                },
                            ],
                        },
                        {
                            label: "二级 2-2",
                            children: [
                                {
                                    label: "三级 2-2-1",
                                },
                            ],
                        },
                    ],
                },
                {
                    label: "一级 3",
                    children: [
                        {
                            label: "二级 3-1",
                            children: [
                                {
                                    label: "三级 3-1-1",
                                },
                            ],
                        },
                        {
                            label: "二级 3-2",
                            children: [
                                {
                                    label: "三级 3-2-1",
                                },
                            ],
                        },
                    ],
                },
            ],
            defaultProps: {
                children: "children",
                label: "label",
            },
            l: "----------------------",
            props: {
                label: "name",
                children: "zones",
            },
            count: 1,
        };
    },
    methods: {
        handleNodeClick(data) {
            console.log(data);
        },
        // --------------------------------------------------
        handleCheckChange(data, checked, indeterminate) {
            console.log(data, checked, indeterminate);
        },

        loadNode(node, resolve) {
            if (node.level === 0) {
                return resolve([{ name: "region1" }, { name: "region2" }]);
            }
            if (node.level > 3) return resolve([]);

            var hasChild;
            if (node.data.name === "region1") {
                hasChild = true;
            } else if (node.data.name === "region2") {
                hasChild = false;
            } else {
                hasChild = Math.random() > 0.5;
            }

            setTimeout(() => {
                var data;
                if (hasChild) {
                    data = [
                        {
                            name: "zone" + this.count++,
                        },
                        {
                            name: "zone" + this.count++,
                        },
                    ];
                } else {
                    data = [];
                }

                resolve(data);
            }, 500);
        },
    },
};
</script>

<style></style>
