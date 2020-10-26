const db = wx.cloud.database();
// 定义 调用 云对象 引用函数

Page({
    data: {
        getDatad: "",
        addDatad: "",
        upDatad: "",
        deletDatad: "",
    },
    getDatad() {
        //  集合索引 ，获取 数据
        db.collection("counters")
            .get()
            .then(res => {
                console.log(res);
            });
    },
    addDatad() {},
    upDatad() {},
    deletDatad() {},
    onLoad: function () {},
});
