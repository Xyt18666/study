// components/nvabar.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        tabs: {
            type: Array,
            value: [],
        },
    },

    /**
     * 组件的初始数据
     */
    data: {},

    /**
     * 组件的方法列表
     */
    methods: {
        itemTap(e) {
            let indexs = e.currentTarget.dataset.index;
            this.triggerEvent("setActive", { indexs });
        },
    },
});
