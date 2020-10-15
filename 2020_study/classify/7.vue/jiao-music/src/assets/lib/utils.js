function debounce(func, wait) {
    let timerId;
    return function(...args) {
        timerId && clearTimeout(timerId);
        timerId = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
}

function throttle(func, wait) {
    let timerId;
    return function(...args) {
        if (!timerId) {
            timerId = setTimeout(() => {
                timerId = null;
                func.apply(this, args);
            }, wait);
        }
    }
}

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

function shuffle(arr) {
    let _arr = arr.slice();
    for (let i = 0; i < _arr.length; i++) {
        const j = getRandomInt(0, i);
        const temp = _arr[i];
        _arr[i] = _arr[j];
        _arr[j] = temp;
    }
    return _arr;
}

function getClientWidth() {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

function insertIntoArray(arr, val, compare, maxLen) {
    const index = arr.findIndex(compare);
    if (index === 0) return;
    if (index > 0) arr.splice(index, 1);
    arr.unshift(val);
    if (maxLen && arr.length > maxLen) arr.pop();
}

function deleteFromArray(arr, compare) {
    const index = arr.findIndex(compare);
    if (index > -1) arr.splice(index, 1);
}

export {
    debounce,
    throttle,
    shuffle,
    getClientWidth,
    insertIntoArray,
    deleteFromArray
};
