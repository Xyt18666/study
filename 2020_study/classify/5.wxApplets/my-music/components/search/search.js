// components/search/search.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {},

    /**
     * 组件的初始数据
     */
    data: {
        mag: null,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        sendMsg(d) {
            console.log(d.detail.value);

            wx.request({
                url: "http://musicapi.leanapp.cn/search",
                data: {
                    keywords: d.detail.value,
                },
                header: {
                    "content-type": "application/json", // 默认值
                },
                success: res => {
                    this.setData({ mag: res.data.result.songs });
                    console.log(this.data.mag);
                },
            });
        },
    },
});
