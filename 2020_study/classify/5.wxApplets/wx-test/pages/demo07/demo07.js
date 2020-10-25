// pages/demo07/demo07.js

const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {},

    /**
     * 生命周期函数--监听页面加载
     */
    scrolltoupper() {
        console.log("顶部");
    },
    scrolltolower() {
        console.log("底部");
    },
    scroll() {
        console.log("滚动");
    },
    onLoad: function (options) {
        console.log(app.globalData.name + "------------------demo07.js");
        app.globalData.name = "鲲";
        console.log(app.globalData.name + "------------------demo07.js");
        app.globalData.git();
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        const query = wx.createSelectorQuery();

        query
            .selectAll(".list .item")
            .fields(
                {
                    dataset: true,
                    size: true,
                    scrollOffset: true,
                    properties: ["scrollX", "scrollY"],
                    computedStyle: ["margin", "backgroundColor"],
                    context: true,
                },
                function (res) {
                    console.log(res);

                    // res.dataset; // 节点的dataset
                    // res.width; // 节点的宽度
                    // res.height; // 节点的高度
                    // res.scrollLeft; // 节点的水平滚动位置
                    // res.scrollTop; // 节点的竖直滚动位置
                    // res.scrollX; // 节点 scroll-x 属性的当前值
                    // res.scrollY; // 节点 scroll-y 属性的当前值
                    // // 此处返回指定要返回的样式名
                    // res.margin;
                    // res.backgroundColor;
                    // res.context; // 节点对应的 Context 对象
                }
            )
            .exec(d => {
                console.log(d);
            });
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {},

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {},

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {},

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {},

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {},

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {},
});
