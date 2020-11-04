var scree = function (name, age, bust) {
    age < 24 && bust > 90 && console.log("ok");
    age >= 24 || (bust < 90 && console.log("no"));
};
scree("xx", 18, 96);
var girls = {
    name: "string",
    age: 14,
    bust: 100,
    ok: "okk",
};
var scree2 = function (girl) {
    console.log(girl.name, girl.age, girl.bust);
};
scree2(girls);
var Jicheng = /** @class */ (function () {
    function Jicheng() {
        this.name = "string";
        this.age = 18;
        this.bust = 14;
    }
    return Jicheng;
}());
// 接口的继承
