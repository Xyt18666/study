define(["flayPlay", "bullet"], (FlayPlay, Bullet) => {
  return class MyPlane {
    constructor(
      x,
      y,
      imgSrc = `img/我的飞机.gif`,
      boomImg = `img/本方飞机爆炸.gif`
    ) {
      this.x = x; //我的飞机位置,飞机图片
      this.y = y;
      this.imgSrc = imgSrc;
      this.boomImg = boomImg;
    }
    init() {
      this.createMyPlane(); //创建飞机
      this.handleEvent(); //飞机的事件

      //判断是否与敌机碰撞
      this.dsq = setInterval(() => {
        //使用定时器 检测是否碰撞
        this.isMyBoom();
      }, 50);
    }
    handleEvent() {
      //我方飞机移动事件

      this.element.onmousedown = (e) => {
        //飞机按下
        e.preventDefault(); //阻止默认事件

        //飞机按下移动
        document.onmousemove = () => {
          //飞机移动
          this.myPlaneMove();
        };

        this.mylaneShoot();
      };

      oBox.onmouseup = () => {
        //飞机抬起
        this.stopShoot();
        document.onmousemove = null;
      };
    }
    stopShoot() {
      //抬起 停止射击
      clearInterval(this.timer);
    }
    mylaneShoot(e) {
      //攻击 子弹
      clearInterval(this.timer);
      let buttle = new Bullet(this.x - 3, this.y - 40 - 14); //按下攻击
      buttle.init();

      this.timer = setInterval(() => {
        //按下 持续攻击
        let buttle = new Bullet(this.x - 3, this.y - 40 - 14);
        buttle.init();
      }, 300);
    }

    myPlaneMove(e) {
      let ev = e || window.event;
      let disX = ev.clientX - oBox.offsetLeft; //鼠标距离可视区左-盒子左
      let disY = ev.clientY - oBox.offsetTop;

      this.x = this.setBound(disX, 33, "width"); //限制边界后的值
      this.y = this.setBound(disY, 40, "height");

      FlayPlay.setStyle(this.element, {
        left: this.x - 33 + "px",
        top: this.y - 40 + "px",
      });
    }
    isMyBoom() {
      // 我的飞机的数据

      let myL = FlayPlay.getStyle(this.element, "left");
      let myT = FlayPlay.getStyle(this.element, "top");
      let myW = FlayPlay.getStyle(this.element, "width");
      let myH = FlayPlay.getStyle(this.element, "height");

      let enemys = document.querySelectorAll(".enemy");
      [...enemys].forEach((item) => {
        //敌机的位置与宽高
        let enemyL = FlayPlay.getStyle(item, "left");
        let enemyT = FlayPlay.getStyle(item, "top");
        let enemyW = FlayPlay.getStyle(item, "width");
        let enemyH = FlayPlay.getStyle(item, "height");
        if (
          myT < enemyT + enemyH && //我飞机的 top 要小于 敌机top+敌机搞  ，也就是y轴重叠
          enemyT < myT + myH &&
          myL < enemyL + enemyW && //我飞机的 左边 要小于  敌机的 左边 + 宽度 ，左侧最大值
          enemyL < myL + myW // 敌机的左边 要小于 我飞机的左边加 我飞机的宽 ，右侧最大值
        ) {
          //自己销毁，游戏结束
          clearInterval(this.dsq); //碰撞后不再检测碰撞
          document.onmousemove = null; //同时移除移动事件
          this.element.onmousedown = null; //同时移除攻击事件
          oBox.onmouseup = null; //同时移除攻击事件

          clearInterval(timer3); //同时停止创建飞机
          clearInterval(timer2); //同时停止创建飞机
          clearInterval(timer1); //同时停止创建飞机
          clearInterval(this.timer); //停止射击

          [...enemys].forEach((items) => {
            //同时停止所有小飞机的运动
            clearInterval(items.time);
          });

          FlayPlay.setStyle(this.element, {
            //改变自身飞机样式
            background: `url(${this.boomImg})`,
          });

          alert("game over");
          setTimeout(() => {
            //延时重载页面
            window.location.reload();
          }, 5000);
        }
      });
    }
    getMax(attr) {
      //获取最大边界
      return (
        FlayPlay.getStyle(oBox, attr) - FlayPlay.getStyle(this.element, attr)
      );
    }
    setBound(direction, num, attr) {
      //限制边界
      return direction < num //小于边界值吗
        ? num //就是边界
        : direction > this.getMax(attr) + 33 // 大于 盒子-飞机+飞机的一半
        ? this.getMax(attr) + 33
        : direction;
    }
    createMyPlane() {
      //创建我的飞机到 页面
      this.element = document.createElement("div");
      this.element.className = "myPlay";
      FlayPlay.setStyle(this.element, {
        left: this.x + "px",
        top: this.y + "px",
        background: `url(${this.imgSrc})`,
      });
      oBox.appendChild(this.element);
    }
  };
});
