import { playMode } from '@/config/play-mode.js';
import { getStorage } from '@/assets/lib/storage.js';

const state = {
    fullscreen: false,
    mode: playMode.normal.value,
    playing: false,

    playlist: [],
    originalList: [],
    currentIndex: -1,

    playHistory: getStorage('play_history', []),
    favoriteList: getStorage('favorite_list', [])
}

export default state;
