var i = 0;

function timedCount() {
  i = i + 1;
  postMessage(i); //它用于向 HTML 页面传回一段消息
  setTimeout("timedCount()", 500);
}
// web worker 通常不用于如此简单的脚本，而是用于更耗费 CPU 资源的任务
timedCount();
