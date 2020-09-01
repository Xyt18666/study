define(["flayPlay", "enemy"], (FlayPlay, EnemyPlay) => {
  return class EnemyBig extends EnemyPlay {
    constructor(
      x = FlayPlay.randoms(30, oBoxW - 30 - 110),
      y = -164,
      iSpeed = 3,
      hitNum = 10,
      w = 110,
      h = 164,
      imgSrc = "img/enemy3_fly_1.png",
      hitImg = "img/大飞机挨打.png",
      boomImg = "img/大飞机爆炸.gif",
      boomTime = 1000,
      fsz = 10
    ) {
      super(x, y, iSpeed, hitNum, w, h, imgSrc, hitImg, boomImg, boomTime, fsz);
    }
  };
});
