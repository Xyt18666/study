var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lady = /** @class */ (function () {
    function Lady() {
        this.content = "hai";
    }
    Lady.prototype.sayHello = function () {
        return this.content;
    };
    return Lady;
}());
var Jiejie = /** @class */ (function (_super) {
    __extends(Jiejie, _super);
    function Jiejie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Jiejie.prototype.sayHello = function () {
        return "改写" + _super.prototype.sayHello.call(this);
    };
    Jiejie.prototype.sayLove = function () {
        return "love";
    };
    return Jiejie;
}(Lady));
var good = new Jiejie();
console.log(good.sayHello());
console.log(good.sayLove());
// -------------------------------------------
var Per = /** @class */ (function () {
    function Per() {
        this.size2 = 18;
    }
    return Per;
}());
// 类的外部
var per = new Per();
per.name = "xxx";
console.log(per.name);
// 不约定访问类型时， 默认是 public ，类的 内部和外部都能调用
//  protected  只能在 内部谁用 ，在继承的时候 可以被继承
// private  只能在 内部谁用 ，继承也不可能使用
// --------------------------------------------------
// 类的构造函数
var Qwe = /** @class */ (function () {
    // names: string;
    function Qwe(names) {
        this.names = names;
        //简写public names: string
        // this.names = names;
    }
    return Qwe;
}());
var qwes = new Qwe("qwer");
console.log(qwes.names);
var qwers = /** @class */ (function (_super) {
    __extends(qwers, _super);
    function qwers(age) {
        var _this = _super.call(this, "xyt") || this;
        _this.age = age;
        return _this;
    }
    return qwers;
}(Qwe));
var qwerss = new qwers(18);
// 构造函数 继承
// -------------------------------------------------------
var Xiaojiejie = /** @class */ (function () {
    function Xiaojiejie(_age, size) {
        this._age = _age;
        this._size = size;
    }
    Object.defineProperty(Xiaojiejie.prototype, "age", {
        get: function () {
            return this._age - 10;
        },
        set: function (age) {
            this._age = age + 5;
        },
        enumerable: false,
        configurable: true
    });
    Xiaojiejie.sayHi = function () {
        console.log("hihihi");
    };
    return Xiaojiejie;
}());
var dajiao = new Xiaojiejie(28, 15);
// console.log(dajiao._age);   无法直接获取
console.log(dajiao.age); // 只能通过get获取 ，此时是 处理后的 值
dajiao.age = 28;
// 通过set时也可以进行包装
Xiaojiejie.sayHi();
// 调用静态方法
// dajiao._size = 77;   无法修改只读属性
// -----------------------------------------------------------
var ChouXiang = /** @class */ (function () {
    function ChouXiang() {
    }
    return ChouXiang;
}());
// 定义基础类 ,子类继承,必须有该方法,否则报错
var zw1 = /** @class */ (function (_super) {
    __extends(zw1, _super);
    function zw1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    zw1.prototype.skill = function () {
        console.log("我是职位1");
    };
    return zw1;
}(ChouXiang));
var zw2 = /** @class */ (function (_super) {
    __extends(zw2, _super);
    function zw2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    zw2.prototype.skill = function () {
        console.log("我是职位2");
    };
    return zw2;
}(ChouXiang));
// class zw2 extends ChouXiang {
//     qwer() {         报错
//         console.log("我是职位22");
//     }
// }
