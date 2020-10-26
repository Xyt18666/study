// pages/save/save.js
const cloud = wx.cloud;
//创建云对象的引用变量
Page({
    /**
     * 页面的初始数据
     */
    data: {
        url: null,
        fileID: null,
    },
    upLoad() {
        wx.chooseImage({
            count: 9,
            sizeType: ["original", "compressed"],
            sourceType: ["album", "camera"],
        })
            .then(res => {
                console.log(res);
                cloud
                    .uploadFile({
                        //上传函数
                        cloudPath: "images/招财猫.jpg", // 上传至 云端的 那个路径
                        filePath: res.tempFilePaths[0], //小程序临时文件路径
                    })
                    .then(res2 => {
                        console.log(res2.fileID);
                        this.setData({ fileID: res2.fileID });
                    });
            })
            .catch(err => {
                console.log(err);
            });
    },
    downLoad() {
        // cloud://yun-test-3gub0zwb396f3a2e.7975-yun-test-3gub0zwb396f3a2e-1304018775/my-image.png
        cloud
            .downloadFile({
                fileID: this.data.fileID,
            })
            .then(res => {
                console.log(res.tempFilePath);
                this.setData({ url: res.tempFilePath });
            });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {},

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {},

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
