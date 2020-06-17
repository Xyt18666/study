
// eslint-disable-next-line
console.log("index")


document.getElementById('hh').onclick = function () {

// 懒加载,js   需要才用加载
  import(/*webpackChunkName:'tests',webpackPrefetch:true*/'./test').then(({ fn }) => {
          // eslint-disable-next-line
          console.log(fn(7,9))
      })
};


// webpackPrefetch:true  预加载
//（ 正常加载可以认为是 并行加载，同一时间加载多个文件）
//而预加载，是 等其他资源加载完毕，浏览器空闲了，在进行加载


// 注册serviceworker
if('serviceWorker' in navigator){
  window.addEventListener('load',()=> {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(()=>{
        console.log("ok")
      })
      .catch(()=>{
        console.log("no")
      })
  })
}