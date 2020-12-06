function getCookie(name, defaultValue) {
    var arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    // console.log(reg);
    // console.log(document.cookie.match(reg));

    console.log(window.navigator.language);

    if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
    else return defaultValue;
}
module.exports = { getCookie };
