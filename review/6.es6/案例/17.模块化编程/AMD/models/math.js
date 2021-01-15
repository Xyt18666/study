//定义依赖 jq 的 数学模块

define(["jquery"], function ($) {
  // 依赖的 模块
  let add = (arr) => {
    let sum = 0;
    $.each(arr, function (index, item) {
      sum += item;
    });
    return sum;
  };
  return { add };
});
