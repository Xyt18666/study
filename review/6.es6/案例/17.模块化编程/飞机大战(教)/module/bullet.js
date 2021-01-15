import {
    Base
} from '../util/base.js';
class Bullet extends Base {
    constructor(wrap, x, y, imgSrc = './img/bullet1.png') {
        super(wrap, x, y, imgSrc);
    }
    init() {
        this.createElement('buttles', {
            left: this.x + 'px',
            top: this.y + 'px',
            backgroundImage: `url(${this.imgSrc})`
        })
        this.elementMove(14,-5);
    }
}

export { Bullet }