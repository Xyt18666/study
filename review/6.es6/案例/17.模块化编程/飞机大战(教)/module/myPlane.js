import {
    Base
} from '../util/base.js';
import {
    Bullet
} from './bullet.js';
class MyPlane extends Base {
    constructor(wrap, x, y, imgSrc = './img/我的飞机.gif', boomImg = './img/本方飞机爆炸.gif') {
        super(wrap, x, y, imgSrc);
        this.boomImg = boomImg;
    }
    init() {
        this.createElement('myPlane', {
            left: this.x + 'px',
            top: this.y + 'px',
            backgroundImage: `url(${this.imgSrc})`
        })
        this.handleEvent();
        this.hitWithEnemy();
    }
    handleEvent() {
        document.addEventListener('mousemove', this.myPlaneMove.bind(this), false);
        this.wrap.addEventListener('mousedown', this.myPlaneShoot.bind(this), false);
        this.wrap.addEventListener('mouseup', this.stopShoot.bind(this), false);
    }
    stopShoot() {
        clearInterval(this.timer);
    }
    myPlaneShoot() {
        clearInterval(this.timer);
        //创建子弹
        let bullet = new Bullet(this.wrap, this.x - 3, this.y - 40 - 14);
        bullet.init();
        this.timer = setInterval(() => {
            let bullet = new Bullet(this.wrap, this.x - 3, this.y - 40 - 14);
            bullet.init();
        }, 100)
    }
    myPlaneMove(e) {
        let ev = e || event;
        let disX = ev.clientX - this.wrap.offsetLeft;
        let disY = ev.clientY - this.wrap.offsetTop;
        this.x = this.setBound(disX, 33, 'width');
        this.y = this.setBound(disY, 40, 'height');
        this.setStyle(this.element, {
            left: this.x - 33 + 'px',
            top: this.y - 40 + 'px'
        })
    }
    setBound(direction, num, attr) {
        return direction < num ? num : direction > (this.getMax(attr) + 33) ? (this.getMax(attr) + 33) :
            direction;
    }
    getMax(attr) {
        return this.getStyle(this.wrap, attr) - this.getStyle(this.element, attr);
    }
    //我方飞机和敌机的碰撞检测
    hitWithEnemy() {
        this.animationFrame = window.requestAnimationFrame(this.hitWithEnemy.bind(this))
        //获取我方飞机的数据
        let myPlaneL = this.getStyle(this.element, 'left');
        let myPlaneT = this.getStyle(this.element, 'top');
        let myPlaneW = this.getStyle(this.element, 'width');
        //查找所有的敌机
        let enemies = document.querySelectorAll('.enemy');
        [...enemies].forEach((item) => {
            //拿到敌机的数据
            let enemyL = this.getStyle(item, 'left');
            let enemyT = this.getStyle(item, 'top');
            let enemyW = this.getStyle(item, 'width');
            let enemyH = this.getStyle(item, 'height');
            if (enemyT + enemyH > myPlaneT && enemyL + enemyW > myPlaneL && enemyL < myPlaneL +
                myPlaneW) {
                window.cancelAnimationFrame(this.animationFrame);
                //我方飞机发生爆炸
                this.setStyle(this.element, {
                    backgroundImage: `url(${this.boomImg})`
                });
                setTimeout(() => {
                    alert('游戏结束');
                    location.reload()
                }, 300)
                return;
            }
        })
    }

}

export {
    MyPlane
}