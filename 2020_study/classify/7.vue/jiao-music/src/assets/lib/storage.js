const LOCAL_STORAGE_KEY = 'local_storage_key_limited_music';

function setStorage(obj) {
    const dt = Object.assign({}, getStorage(), {
        ...obj
    });
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dt));
}

function getStorage(key, defaultVal = null) {
    const data = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) || '{}');
    if (!key) {
        return data;
    } else {
        return data[key] === undefined ? defaultVal : data[key];
    }
}

export {
    setStorage,
    getStorage
};
