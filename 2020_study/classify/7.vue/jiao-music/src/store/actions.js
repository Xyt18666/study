import * as types from './types.js';
import { playMode } from '@/config/play-mode.js';
import { shuffle, insertIntoArray, deleteFromArray } from '@/assets/lib/utils.js';
import { setStorage, getStorage } from '@/assets/lib/storage.js';

function findIndex(list, song) {
    return list.findIndex(item => {
        return item.id === song.id;
    });
}

// 在歌曲列表中选择一首歌开始播放
function selectPlay({ commit, state }, { list, index }) {
    commit(types.SET_ORIGINAL_LIST, list);
    if (state.mode === playMode.random.value) {
        const randomList = shuffle(list);
        commit(types.SET_PLAYLIST, randomList);
        index = findIndex(randomList, list[index]);
    } else {
        commit(types.SET_PLAYLIST, list);
    }
    commit(types.SET_CURRENT_INDEX, index);
    commit(types.SET_FULLSCREEN, true);
    commit(types.SET_PLAYING_STATE, true);
}

// 随机播放一个列表
function randomPlay({ commit }, list) {
    commit(types.SET_PLAY_MODE, playMode.random.value);
    commit(types.SET_ORIGINAL_LIST, list);
    const randomList = shuffle(list);
    commit(types.SET_PLAYLIST, randomList);
    commit(types.SET_CURRENT_INDEX, 0);
    commit(types.SET_FULLSCREEN, true);
    commit(types.SET_PLAYING_STATE, true);
}

// 向播放列表中添加一首
function insertSong({ commit, state }, song) {
    let playlist = state.playlist.slice();
    let originalList = state.originalList.slice();
    let currentIndex = state.currentIndex;
    let currentSong = playlist[currentIndex];
    const _findIndex = findIndex(playlist, song);
    currentIndex++;
    playlist.splice(currentIndex, 0, song);

    if (_findIndex > -1) {
        if (currentIndex > _findIndex) {
            playlist.splice(_findIndex, 1);
            currentIndex--;
        } else {
            playlist.splice(_findIndex + 1, 1);
        }
    }

    let currentIndexOriginal = findIndex(originalList, currentSong) + 1;
    let _findIndexOriginal = findIndex(originalList, song);

    originalList.splice(currentIndexOriginal, 0, song);

    if (_findIndexOriginal > -1) {
        if (currentIndexOriginal > _findIndexOriginal) {
            originalList.splice(_findIndexOriginal, 1)
        } else {
            originalList.splice(_findIndexOriginal + 1, 1)
        }
    }

    commit(types.SET_PLAYLIST, playlist);
    commit(types.SET_ORIGINAL_LIST, originalList);
    commit(types.SET_CURRENT_INDEX, currentIndex);
    commit(types.SET_FULLSCREEN, true);
    commit(types.SET_PLAYING_STATE, true);
}

function deleteSong({ commit, state }, song) {
    let playlist = state.playlist.slice();
    let originalList = state.originalList.slice();
    let currentIndex = state.currentIndex;
    let _findIndex = findIndex(playlist, song);
    playlist.splice(_findIndex, 1);
    let _findIndexOriginal = findIndex(originalList, song);
    originalList.splice(_findIndexOriginal, 1);
    if (currentIndex > _findIndex || currentIndex === playlist.length) {
        currentIndex--;
    }

    commit(types.SET_PLAYLIST, playlist);
    commit(types.SET_ORIGINAL_LIST, originalList);
    commit(types.SET_CURRENT_INDEX, currentIndex);

    if (!playlist.length) {
        commit(types.SET_PLAYING_STATE, false);
    } else {
        commit(types.SET_PLAYING_STATE, true);
    }
}

function clearSongList({ commit }) {
    commit(types.SET_PLAYING_STATE, false);
    commit(types.SET_CURRENT_INDEX, -1);
    commit(types.SET_PLAYLIST, []);
    commit(types.SET_ORIGINAL_LIST, []);
}

function savePlayHistory({ commit }, song) {
    commit(types.SET_PLAY_HISTORY, storagePlayHistory(song));
}

function storagePlayHistory(song) {
    let songs = getStorage('play_history', []);
    insertIntoArray(songs, song, item => {
        return song.id === item.id;
    }, 10);
    setStorage({
        play_history: songs
    })
    return songs;
}

function saveFavoriteList({ commit }, song) {
    commit(types.SET_FAVORITE_LIST, storageFavoriteList(song));
}

function storageFavoriteList(song) {
    let songs = getStorage('favorite_list', []);
    if (songs.findIndex(item => item.id === song.id) > -1) {
        deleteFromArray(songs, item => {
            return song.id === item.id;
        });
    } else {
        insertIntoArray(songs, song, item => {
            return song.id === item.id;
        }, 10);
    }
    setStorage({
        favorite_list: songs
    })
    return songs;
}

export {
    selectPlay,
    randomPlay,
    insertSong,
    deleteSong,
    clearSongList,
    savePlayHistory,
    saveFavoriteList
}
