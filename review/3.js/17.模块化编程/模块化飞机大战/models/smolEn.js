define(["flayPlay", "enemy"], (FlayPlay, EnemyPlay) => {
  return class EnemySmol extends EnemyPlay {
    constructor(
      x = FlayPlay.randoms(30, oBoxW - 30 - 34),
      y = -24,
      iSpeed = 8,
      hitNum = 1,
      w = 34,
      h = 24,
      imgSrc = "img/enemy1_fly_1.png",
      hitImg = "img/小飞机爆炸.gif",
      boomImg = "img/boom.png",
      boomTime = 200,
      fsz = 1
    ) {
      super(x, y, iSpeed, hitNum, w, h, imgSrc, hitImg, boomImg, boomTime, fsz);
    }
  };
});
