!(function() {
    setSize();

    ["resize", "orientationchange", "DOMContentLoaded"].forEach(function(item) {
        window.addEventListener(item, setSize);
    });
    /*监听屏幕尺寸改变,监听屏幕旋转,监听文档加载完成*/

    function setSize() {
        const designWidth = 375; //设计稿尺寸
        const screenWidth = document.body.clientWidth || document.documentElement.clientWidth; //当前可视区的 宽度
        document.documentElement.style.fontSize = (100 / designWidth) * screenWidth + "px";
    }
})(document, window);
