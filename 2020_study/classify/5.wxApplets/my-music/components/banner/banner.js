// components/banner/banner.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {},

    /**
     * 组件的初始数据
     */
    data: {
        banner: null,
    },

    /**
     * 组件的方法列表
     */
    methods: {},
    created() {
        wx.request({
            url: "http://m.jxsjs.com/api/slider-list", //仅为示例，并非真实的接口地址
            header: {
                "content-type": "application/json", // 默认值
            },
            success: res => {
                this.setData({ banner: res.data.data });
                // console.log(this.data.banner);
            },
        });
    },
});
