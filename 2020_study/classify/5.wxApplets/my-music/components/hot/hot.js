// components/hot/hot.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {},

    /**
     * 组件的初始数据
     */
    data: {
        list: null,
    },

    /**
     * 组件的方法列表
     */
    methods: {},
    created() {
        wx.request({
            url: "http://m.jxsjs.com/api/singer-list",
            header: {
                "content-type": "application/json", // 默认值
            },
            success: res => {
                // this.setData({ list: res.data.data });

                let arr = [];
                let obj = {};
                res.data.data.forEach(item => {
                    const letter = item.firstLetter;
                    if (obj[letter] === undefined) {
                        obj[letter] = {
                            letter,
                            items: [],
                        };
                    }
                    obj[letter].items.push(item);
                });
                for (let key in obj) {
                    arr.push(obj[key]);
                }
                arr.sort((a, b) => {
                    return a.letter.charCodeAt(0) - b.letter.charCodeAt(0);
                });
                this.setData({ list: arr });
                console.log(this.data.list);
            },
        });
    },
});
