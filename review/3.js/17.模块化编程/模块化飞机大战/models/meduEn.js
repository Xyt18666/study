define(["flayPlay", "enemy"], (FlayPlay, EnemyPlay) => {
  return class EnemyMedium extends EnemyPlay {
    constructor(
      x = FlayPlay.randoms(30, oBoxW - 30 - 46),
      y = -60,
      iSpeed = 5,
      hitNum = 5,
      w = 46,
      h = 60,
      imgSrc = "img/enemy2_fly_1.png",
      hitImg = "img/中飞机挨打.png",
      boomImg = "img/中飞机爆炸.gif",
      boomTime = 500,
      fsz = 5
    ) {
      super(x, y, iSpeed, hitNum, w, h, imgSrc, hitImg, boomImg, boomTime, fsz);
    }
  };
});
