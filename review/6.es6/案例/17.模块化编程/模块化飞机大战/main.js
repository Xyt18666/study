//入口文件
require.config({
  //配置路径
  baseUrl: "./models", //基础路径
  paths: {
    jquery: "jq",
    flayPlay: "flayPlay",
    myPlane: "myPlay",
    bullet: "bullte",
    enemy: "enemy",
    bigen: "bigEn",
    meduen: "meduEn",
    smolen: "smolEn",
  },
});

let oBtn = document.querySelector("button"); //开始游戏按钮
let oBox = document.querySelector(".box"); //整体盒子
let oBoxW = oBox.offsetWidth; //大盒子宽
let oBoxH = oBox.offsetHeight; //大盒子高
let qpbz = document.querySelector(".qpbz"); //全屏爆炸按钮
let fsNum = 0; //总分
let difficulty = 1; //难度系数
let timer1 = null;
let timer2 = null;
let timer3 = null;

require([
  "flayPlay",
  "bullet",
  "myPlane",
  "enemy",
  "bigen",
  "meduen",
  "smolen",
], (flayPlay, Bullet, MyPlane, EnemyPlay, EnemyBig, EnemyMedium, EnemySmol) => {
  //执行操作

  oBox.onmousedown = function (e) {
    e.preventDefault();
  };
  oBtn.onclick = function (e) {
    e.preventDefault();
    //开始点击

    flayPlay.setStyle(oBox, {
      background: `url(img/background_1.png)`,
    });

    this.style.display = "none"; //移除按钮
    qpbz.style.display = "block";

    let myPlay = new MyPlane(oBox.offsetWidth / 2 - 33, oBox.offsetHeight - 80); //创建我的飞机 实例并初始化
    myPlay.init();

    setInterval(() => {
      difficulty++; //难度系数随着时间递增
    }, 60000);

    timer3 = setInterval(() => {
      let enemySmol = new EnemySmol(); //创建敌机 实例并初始化
      enemySmol.init();
    }, 1000 * difficulty * 0.7);

    timer2 = setInterval(() => {
      let enemyMedium = new EnemyMedium(); //创建敌机 实例并初始化
      enemyMedium.init();
    }, 5000 * difficulty * 0.7);

    timer1 = setInterval(() => {
      let enemyBig = new EnemyBig(); //创建敌机 实例并初始化
      enemyBig.init();
    }, 15000 * difficulty * 0.7);
  };
});

//能够实现异步加载模块，在页面输出
