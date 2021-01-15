class Base {
    constructor(wrap, x, y, imgSrc) {
        this.wrap = wrap;
        this.x = x;
        this.y = y;
        this.imgSrc = imgSrc;
    }
    createElement(className, json) {
        this.element = document.createElement('div');
        this.element.classList.add(className);
        this.setStyle(this.element, json);
        this.wrap.appendChild(this.element);
    }
    setStyle(ele, json) {
        for (let [key, value] of Object.entries(json)) {
            ele.style[key] = value;
        }
    }
    elementMove(target, iSpeed ,fn) {
        this.timer = setInterval(() => {
            let iCur = this.getStyle(this.element, 'top');
            if ((iSpeed<0 && iCur < target) || (iSpeed>0 && iCur>=target)) {
                clearInterval(this.timer);
                this.element.remove();
                if (iSpeed>0) {
                    alert('游戏结束');
                    location.reload();
                }
                return;
            }
            this.setStyle(this.element, {
                top: iCur + iSpeed + 'px'
            })
            fn && fn();
        }, 30)
    }
    getStyle(ele, attr) {
        return parseInt(ele.style[attr] || getComputedStyle(ele)[attr])
    }
}

export {
    Base
}