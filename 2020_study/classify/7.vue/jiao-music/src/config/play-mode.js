const playMode = {
    normal: {
        label: '顺序播放',
        value: 1
    },
    loop: {
        label: '单曲循环',
        value: 2
    },
    random: {
        label: '随机播放',
        value: 3
    }
};

const playModeObj = {};
Object.keys(playMode).forEach(key => {
    const item = playMode[key];
    playModeObj[item.value] = {
        key,
        value: item.value,
        label: item.label
    };
});

export {
    playMode,
    playModeObj
}
