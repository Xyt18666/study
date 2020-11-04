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
    }
    return Per;
}());
var per = new Per();
per.name = "xxx";
console.log(per.name);
