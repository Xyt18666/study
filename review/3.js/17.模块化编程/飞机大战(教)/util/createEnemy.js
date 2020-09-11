import { SmallEnemy,MiddleEnemy,LargeEnemy } from '../module/enemy.js';
const oBox = document.querySelector(".box");
const createEnemy = () => {
    const timer = setInterval(() => {
        let num = getRan(1, 100);
        if (num >= 1 && num <= 80) {
            let smallEnemy = new SmallEnemy(oBox,getRan(30, oBox.offsetWidth - 64), -24,'./img/enemy1_fly_1.png',getRan(3, 5))
            smallEnemy.init();
        } else if (num >= 81 && num <= 90) {
            let middleEnemy = new MiddleEnemy(oBox,getRan(30, oBox.offsetWidth - 76), -60,'./img/enemy2_fly_1.png', getRan(2, 3))
            middleEnemy.init();
        } else {
            let largeEnemy = new LargeEnemy(oBox,getRan(30, oBox.offsetWidth - 140), -164,'./img/enemy3_fly_1.png', 1)
            largeEnemy.init();
        }
    }, 800);
}
const getRan = (min,max)=>{
    return Math.floor(Math.random() * (max + 1 - min) + min); 
};

export {createEnemy}