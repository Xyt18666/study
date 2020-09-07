import "./jq.js"; //引入jq

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
function PromiseAjax(params) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: params.url,
      type: params.type || "get",
      async: false,
      dataType: params.dataType || "json",
      headers: params.headers || {},
      data: params.data || {},
      jsonpCallback: params.jsonpCallback || {},
      success(res) {
        resolve(res);
      },
      error(err) {
        reject(err);
      },
    });
  });
}
export { getEle, getEleAll, getStyle, setStyle, PromiseAjax };
