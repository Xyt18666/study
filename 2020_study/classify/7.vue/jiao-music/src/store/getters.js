export const fullscreen = state => state.fullscreen;
export const mode = state => state.mode;
export const playing = state => state.playing;

export const playlist = state => state.playlist;
export const originalList = state => state.originalList;
export const currentIndex = state => state.currentIndex;

export const currentSong = state => {
    return state.playlist[state.currentIndex] || {};
};

export const playHistory = state => state.playHistory;
export const favoriteList = state => state.favoriteList;
