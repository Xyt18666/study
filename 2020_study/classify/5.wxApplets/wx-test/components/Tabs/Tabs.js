// components/Tabs/Tabs.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        dataA: {
            type: String,
            value: "",
        },
        tabs: {
            type: Array,
            value: [],
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
        // tabs: [
        //     {
        //         id: 0,
        //         name: "1111",
        //         isActive: true,
        //     },
        //     {
        //         id: 1,
        //         name: "222",
        //         isActive: false,
        //     },
        //     {
        //         id: 2,
        //         name: "333",
        //         isActive: false,
        //     },
        // ],
    },

    /**
     * 组件的方法列表
     */
    methods: {
        itemTap(e) {
            let indexs = e.currentTarget.dataset.index;

            this.triggerEvent("setActive", { indexs });

            // let { tabs } = this.data;
            // tabs.map((item, index) =>
            //     index === indexs ? (item.isActive = true) : (item.isActive = false)
            // );
            // this.setData({ tabs });
        },
    },
    observers:{},
    
});
