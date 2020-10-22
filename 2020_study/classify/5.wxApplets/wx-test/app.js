//app.js
App({
    onLaunch: function () {
        //第一次启动就会触发
        console.log("onLaunch");

        //不能触发onPageNotFound
        // wx.navigateTo({ 跳转到某某
        //     url: "11/11/22",
        // });

        // 展示本地存储能力
        var logs = wx.getStorageSync("logs") || [];
        logs.unshift(Date.now());
        wx.setStorageSync("logs", logs);

        // 登录
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            },
        });
        // 获取用户信息
        wx.getSetting({
            success: res => {
                if (res.authSetting["scope.userInfo"]) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                        success: res => {
                            // 可以将 res 发送给后台解码出 unionId
                            this.globalData.userInfo = res.userInfo;

                            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                            // 所以此处加入 callback 以防止这种情况
                            if (this.userInfoReadyCallback) {
                                this.userInfoReadyCallback(res);
                            }
                        },
                    });
                }
            },
        });
    },
    onShow() {
        console.log("onShow");
    },
    onHide() {
        console.log("onHide");
    },
    onError(e) {
        console.log(e);
    },
    onPageNotFound() {
        console.log("onPageNotFound");
    },
    globalData: {
        userInfo: null,
    },
});
