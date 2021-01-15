import { MyPlane } from './module/myPlane.js';
import {
    SmallEnemy,
    MiddleEnemy,
    LargeEnemy
} from "./module/enemy.js";
import {createEnemy} from './util/createEnemy.js';
import * as config from './util/config.js';

let oBtn = document.querySelector('button');

const myPlane = new MyPlane(config.wrap,config.wrapW/2-33,config.wrapH-80);

oBtn.onclick = function () {
    config.wrap.style.backgroundImage = 'url(./img/background_1.png)';
    this.remove();
    myPlane.init();
    createEnemy();
}