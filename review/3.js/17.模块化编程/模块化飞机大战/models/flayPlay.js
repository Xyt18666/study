define(() => {
  function getStyle(ele, attr) {
    //获取样式
    return parseInt(ele.style[attr] || getComputedStyle(ele)[attr]);
  }
  function setStyle(obj, json) {
    //设置样式
    for (let [key, value] of Object.entries(json)) {
      obj.style[key] = value;
    }
  }
  function randoms(max, min) {
    //全局的随机函数
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return {
    getStyle,
    setStyle,
    randoms,
  };
});
