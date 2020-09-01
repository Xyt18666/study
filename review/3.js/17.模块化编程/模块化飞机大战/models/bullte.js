define(["flayPlay"], (FlayPlay) => {
  return class Bullet {
    //子弹类

    constructor(x, y, imgSrc = "img/bullet1.png") {
      this.x = x;
      this.y = y; //子弹位置，子弹图
      this.imgSrc = imgSrc;
    }
    init() {
      this.creatBullet(); //创建子弹
      this.buttleMove(); //子弹移动
    }
    buttleMove() {
      this.timer = setInterval(() => {
        FlayPlay.setStyle(this.bulletNode, {
          top: FlayPlay.getStyle(this.bulletNode, "top") - 5 + "px",
        });
        FlayPlay.getStyle(this.bulletNode, "top") < -14 //超出可视区，移除子弹
          ? this.bulletNode.remove()
          : null;
      }, 10);
    }
    creatBullet() {
      //创建子弹
      this.bulletNode = document.createElement("div");
      this.bulletNode.className = "buttles";
      FlayPlay.setStyle(this.bulletNode, {
        left: this.x + "px",
        top: this.y + "px",
        background: `url(${this.imgSrc})`,
      });
      oBox.appendChild(this.bulletNode);
    }
  };
});
