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
        this.setData({ playing: e.detail.item });
        backgroundAudioManager.title = this.data.playing.song;
        backgroundAudioManager.src = this.data.playing.url;

        backgroundAudioManager.play();
        console.log(this.data.playing);
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
});
