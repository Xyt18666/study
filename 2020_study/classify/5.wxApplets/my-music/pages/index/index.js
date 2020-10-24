//index.js
//获取应用实例
const app = getApp();
const backgroundAudioManager = wx.getBackgroundAudioManager();
Page({
    data: {
        tabs: [
            {
                id: 0,
                name: "推荐音乐",
                isActive: true,
            },
            {
                id: 1,
                name: "歌手",
                isActive: false,
            },
            {
                id: 2,
                name: "搜索",
                isActive: false,
            },
        ],
        play: false,
        playing: null,
        playlist: [],
        listShow: false,
    },
    listAc() {
        this.setData({ listShow: !this.data.listShow });
    },
    setActive(d) {
        let indexs = d.detail.indexs;

        let { tabs } = this.data;
        tabs.map((item, index) =>
            index === indexs ? (item.isActive = true) : (item.isActive = false)
        );
        this.setData({ tabs });
    },
    setPlaying(e) {
        let newlist = this.data.playlist.slice(0);
        // console.log(newlist);

        if (newlist.length == 0) {
            newlist.push(e.detail.item);
        } else {
            let isTrue = newlist.some(item => item.id == e.detail.item.id);
            if (!isTrue) {
                newlist.push(e.detail.item);
            }
        }
        this.setData({ playlist: newlist });
        console.log(this.data.playlist);

        this.setData({ playing: e.detail.item });
        backgroundAudioManager.title = this.data.playing.song;
        backgroundAudioManager.src = this.data.playing.url;

        backgroundAudioManager.play();
        // console.log(this.data.playing);
    },
    setPlay(e) {
        console.log(e.currentTarget.dataset.item);
        backgroundAudioManager.title = e.currentTarget.dataset.item.song;
        backgroundAudioManager.src = e.currentTarget.dataset.item.url;
        backgroundAudioManager.play();
    },
    isPlay(e) {
        if (e.currentTarget.dataset.play) {
            backgroundAudioManager.play();
            this.setData({ play: e.currentTarget.dataset.play });
        } else {
            backgroundAudioManager.pause();
            this.setData({ play: e.currentTarget.dataset.play });
        }
    },
    clearItem(e) {
        let indexa = this.data.playlist.findIndex(item => {
            item.id == e.currentTarget.dataset.item;
        });
        let newlist = this.data.playlist.slice(0);
        newlist.splice(indexa, 1);
        this.setData({ playlist: newlist });
    },
});
