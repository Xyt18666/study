define(["flayPlay"], (FlayPlay) => {
  return class EnemyPlay {
    //创建敌人
    constructor(
      x,
      y,
      iSpeed,
      hitNum,
      w,
      h,
      imgSrc,
      hitImg,
      boomImg,
      boomTime,
      fsz
    ) {
      this.x = x; //敌机 位置，速度，需要碰撞的次数,大小 ，图片，爆炸动图，爆炸结束图,分数
      this.y = y;
      this.iSpeed = iSpeed;
      this.hitNum = hitNum;
      this.w = w;
      this.h = h;
      this.imgSrc = imgSrc;
      this.hitImg = hitImg;
      this.boomImg = boomImg;
      this.boomTime = boomTime;
      this.fsz = fsz;
    }
    init() {
      this.creatEneyPlane();
      this.screenBlast();
    }
    screenBlast() {
      //全屏爆炸

      this.cd = 60;

      this.screenBomButton = qpbz;
      this.screenBomButton.onclick = () => {
        this.screenBomButton.style.pointerEvents = "none";

        [...document.querySelectorAll(".enemy")].forEach((item) => {
          this.boom(item, item.boomImg, item.boomTime);
        });

        setInterval(() => {
          this.cd--;
          this.screenBomButton.innerHTML = `${this.cd}s`;
          if (this.cd <= 0) {
            this.screenBomButton.style.pointerEvents = "auto";
            this.onof = true;

            this.cd = 60;
          }
        }, 1000);
      };
    }
    boom(ele, eleBoomImg, eleBoomTime) {
      fsNum += ele.fsz; //计算总分

      document.querySelector(".fs span").innerHTML = fsNum;
      FlayPlay.setStyle(ele, {
        //改背景图
        background: `url(${eleBoomImg})`,
      });
      clearInterval(ele.time); //关定时器。飞机不能移动
      setTimeout(() => {
        ele.remove(); //定时移除
      }, eleBoomTime);
    }
    creatEneyPlane() {
      //创建敌机
      this.enemyNode = document.createElement("div");
      this.enemyNode.className = "enemy";
      this.enemyNode.boomImg = this.boomImg; //为当前飞机绑定当前爆炸图
      this.enemyNode.boomTime = this.boomTime;
      this.enemyNode.fsz = this.fsz; //为当前飞机元素添加自身属性

      FlayPlay.setStyle(this.enemyNode, {
        position: "absolute",
        left: this.x + "px",
        top: this.y + "px",
        width: this.w + "px",
        height: this.h + "px",
        background: `url(${this.imgSrc})`,
      });
      oBox.appendChild(this.enemyNode);
      this.enemyMove();
    }
    enemyMove() {
      this.enemyNode.time = setInterval(() => {
        let iCurt = FlayPlay.getStyle(this.enemyNode, "top");

        FlayPlay.setStyle(this.enemyNode, {
          top: iCurt + this.iSpeed + "px",
        });
        iCurt >= oBoxH //超出可视区，移除敌机
          ? this.enemyNode.remove() //可以是游戏结束
          : null;

        //不停的检测是否被击中
        this.hit();
      }, 50);
    }
    hit() {
      //敌机的位置与宽高
      let enemyL = FlayPlay.getStyle(this.enemyNode, "left");
      let enemyT = FlayPlay.getStyle(this.enemyNode, "top");
      let enemyW = FlayPlay.getStyle(this.enemyNode, "width");
      let enemyH = FlayPlay.getStyle(this.enemyNode, "height");

      let buttles = document.querySelectorAll(".buttles");
      [...buttles].forEach((item) => {
        //子弹的位置与宽高
        let buttL = FlayPlay.getStyle(item, "left");
        let buttT = FlayPlay.getStyle(item, "top");
        let buttW = FlayPlay.getStyle(item, "width");
        let buttH = FlayPlay.getStyle(item, "height");
        if (
          buttT < enemyT + enemyH && //子弹的top 要小于 飞机的top+飞机高  ，表示在X轴相交
          buttL < enemyL + enemyW && //子弹的left 要小于 飞机的left+飞机宽 ， 表示子弹 击中左侧 的最小范围
          enemyL < buttL + buttW && //敌机的left 要小于 子弹的left+子弹的宽 ，表示子弹 击中左侧 的最小范围
          enemyT < buttT + buttH // 敌机的 top 要小于 子弹的 top +子弹的高
        ) {
          //击中
          item.remove(); //击中的子弹删除
          this.hitNum--; //击中次数减1
          FlayPlay.setStyle(this.enemyNode, {
            background: `url(${this.hitImg})`, //修改为挨打图
          });

          if (this.hitNum <= 0) {
            this.boom(this.enemyNode, this.boomImg, this.boomTime);
          }
        }
      });
    }
  };
});
