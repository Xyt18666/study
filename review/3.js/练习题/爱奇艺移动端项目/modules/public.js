function getEle(clas) {
  return document.querySelector(clas);
}
function getEleAll(clas) {
  return document.querySelectorAll(clas);
}
function getStyle(ele, attr) {
  //获取样式
  return parseInt(getComputedStyle(ele)[attr] || ele.style[attr]);
}
function setStyle(obj, json) {
  //设置样式
  for (let [key, value] of Object.entries(json)) {
    obj.style[key] = value;
  }
}
export { getEle, getEleAll, getStyle, setStyle };
