import {
    Base
} from "../util/base.js";
class Enemy extends Base {
    constructor(wrap, x, y, imgSrc, iSpeed, hitNum, boomTime, w, h, hitImg, boomImg) {
        super(wrap, x, y, imgSrc);
        this.iSpeed = iSpeed;
        this.hitNum = hitNum;
        this.boomTime = boomTime;
        this.w = w;
        this.h = h;
        this.hitImg = hitImg;
        this.boomImg = boomImg;
    }
    init() {
        this.createElement('enemy', {
            position: 'absolute',
            left: this.x + 'px',
            top: this.y + 'px',
            width: this.w + 'px',
            height: this.h + 'px',
            backgroundImage: `url(${this.imgSrc})`
        })
        this.elementMove(this.wrap.offsetHeight - this.h, this.iSpeed, this.hit.bind(this));
    }
    hit() {
        //获取敌机的数据
        let enemyL = this.getStyle(this.element, 'left');
        let enemyT = this.getStyle(this.element, 'top');
        let enemyW = this.getStyle(this.element, 'width');
        let enemyH = this.getStyle(this.element, 'height');
        //获取页面所有子弹
        let buttles = document.querySelectorAll('.buttles');
        [...buttles].forEach((item) => {
            //拿到子弹数据
            let bulletL = this.getStyle(item, 'left');
            let bulletT = this.getStyle(item, 'top');
            let bulletW = this.getStyle(item, 'width');
            if (bulletT < enemyT + enemyH && enemyL < bulletL + bulletW && bulletL < enemyL +
                enemyW) {
                //发生碰撞，碰撞次数减1
                this.hitNum--;
                this.setStyle(this.element, {
                    backgroundImage: `url(${this.hitImg})`
                })
                //当碰撞次数用完了那么飞机将爆炸
                if (this.hitNum <= 0) {
                    this.setStyle(this.element, {
                        backgroundImage: `url(${this.boomImg})`
                    });
                    clearInterval(this.timer);
                    //延迟一段时间把爆炸的敌机移除
                    setTimeout(() => {
                        this.element.remove()
                    }, this.boomTime)
                }
                //打中飞机的这颗子弹也要移除
                item.remove();
            }
        })
    }

}

class SmallEnemy extends Enemy{
    constructor(wrap, x, y, imgSrc, iSpeed, hitNum='1', boomTime='300', w='34', h='24', hitImg='./img/enemy1_fly_1.png', boomImg='./img/小飞机爆炸.gif'){
        super(wrap, x, y, imgSrc, iSpeed, hitNum, boomTime, w, h, hitImg, boomImg)
    }
}
class MiddleEnemy extends Enemy{
    constructor(wrap, x, y, imgSrc, iSpeed, hitNum='15', boomTime='500', w='46', h='60', hitImg='./img/中飞机挨打.png', boomImg='./img/中飞机爆炸.gif'){
        super(wrap, x, y, imgSrc, iSpeed, hitNum, boomTime, w, h, hitImg, boomImg)
    }
}
class LargeEnemy extends Enemy{
    constructor(wrap, x, y, imgSrc, iSpeed, hitNum='40', boomTime='800', w='110', h='164', hitImg='./img/大飞机挨打.png', boomImg='./img/大飞机爆炸.gif'){
        super(wrap, x, y, imgSrc, iSpeed, hitNum, boomTime, w, h, hitImg, boomImg)
    }
}
export {
    SmallEnemy,
    MiddleEnemy,
    LargeEnemy
};