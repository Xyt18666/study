// pages/demo06/demo06.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        tabs: [
            {
                id: 0,
                name: "首页",
                isActive: true,
            },
            {
                id: 1,
                name: "222",
                isActive: false,
            },
            {
                id: 2,
                name: "333",
                isActive: false,
            },
        ],
    },
    setActive(d) {
        let indexs = d.detail.indexs;

        let { tabs } = this.data;
        tabs.map((item, index) =>
            index === indexs ? (item.isActive = true) : (item.isActive = false)
        );
        this.setData({ tabs });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {},

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {},

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
