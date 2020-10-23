// components/recommend/recommend.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {},

    /**
     * 组件的初始数据
     */
    data: {
        singerList: null,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        toMusic(d) {
            this.triggerEvent("setPlaying", { item: d.currentTarget.dataset.item });
        },
    },
    created() {
        wx.request({
            url: "http://m.jxsjs.com/api/hit-single-list",
            header: {
                "content-type": "application/json", // 默认值
            },
            success: res => {
                this.setData({ singerList: res.data.data });
                // console.log(this.data.singerList);
            },
        });
    },
});
