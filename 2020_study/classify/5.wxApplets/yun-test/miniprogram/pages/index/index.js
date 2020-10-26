const db = wx.cloud.database();
// 定义 调用 云对象 引用函数

const _ = db.command;

Page({
    data: {
        getDatad: "",
        addDatad: "",
        upDatad: "",
        deletDatad: "",
    },
    getData() {
        //  查询集合里的所有记录
        // db.collection("counters")
        //     .get()
        //     .then(res => {
        //         console.log(res);
        //         this.setData({ getDatad: res.data[0].name });
        //     });
        //通过id查询一条数据
        // db.collection("counters")
        //     .doc("e373396c5f9636fb01f498bd06e2ec0d")
        //     .get()
        //     .then(res => {
        //         console.log(res);
        //         this.setData({ getDatad: res.data.name });
        //     });

        // 通过查询指令
        const _ = db.command;
        db.collection("counters")
            .where({
                name: _.eq("阿离"),
            })
            .get()
            .then(res => {
                console.log(res);
                this.setData({ getDatad: res.data[0].name });
            });
    },
    addData() {
        db.collection("counters")
            .add({
                data: {
                    title: "鲲",
                    or: "亚",
                    time: new Date("2020-10-26"),
                },
            })
            .then(res => {
                console.log(res);
            });
    },
    upData() {
        // db.collection("counters")
        //     .doc("e373396c5f9636fb01f498bd06e2ec0d")
        //     .update({
        //         data: {
        //             name: _.set({
        //                 nanms: "雅",
        //             }),
        //         },
        //     })
        //     .then(res => {
        //         console.log(res);
        //     });
        db.collection("counters")
            .doc("1b64dd7b5f9674320201f219627bdb89")
            .update({
                data: {
                    title: "坤",
                    or: "亚",
                    time: new Date("2020-9-7"),
                },
            })
            .then(res => {
                console.log(res);
            });
    },
    deletData() {
        db.collection("counters")
            .doc("1b64dd7b5f9674320201f219627bdb89")
            .remove()
            .then(res => {
                console.log(res);
            });
    },
    onLoad: function () {},
});
