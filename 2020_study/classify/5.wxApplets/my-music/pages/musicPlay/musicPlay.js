// pages/musicPlay/musicPlay.js
const backgroundAudioManager = wx.getBackgroundAudioManager();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        jdt: null,
        onof: false,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    change() {
        this.setData({ onof: true });
        // console.log(event.detail.value);
        // let time = (backgroundAudioManager.duration * event.detail.value) / 100;
        // backgroundAudioManager.seek(time);
    },
    end(event) {
        this.setData({ onof: false });
        let time = (backgroundAudioManager.duration * event.detail.value) / 100;
        backgroundAudioManager.seek(time);
    },
    isPlay() {
        if (backgroundAudioManager.paused) {
            backgroundAudioManager.play();
        } else {
            backgroundAudioManager.pause();
        }
    },
    onLoad: function (options) {
        wx.request({
            url: "http://m.jxsjs.com/api/hit-single-list", //仅为示例，并非真实的接口地址
            header: {
                "content-type": "application/json", // 默认值
            },
            success: res => {
                let ind = res.data.data.findIndex(item => item.id == options.id);
                this.setData({ pling: res.data.data[ind] });
                // console.log(this.data.pling);
            },
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        backgroundAudioManager.onTimeUpdate(() => {
            if (this.data.onof) {
                return;
            }
            let cur = backgroundAudioManager.currentTime;
            let dur = backgroundAudioManager.duration;
            // console.log((cur / dur) * 100);
            // console.log(this);

            this.setData({ jdt: (cur / dur) * 100 });
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
