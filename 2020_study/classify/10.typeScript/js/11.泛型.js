function join(a, b) {
    return "" + a + b;
}
join("aa", 1);
function myFn(arr) {
    console.log(arr);
}
// function myFn<fx>(arr: Array<fx>) {
//     console.log(arr);
// }
myFn(["123", "sef"]);
// 使用泛型改写
var selectGirl = /** @class */ (function () {
    // 泛型约束  继承自 某接口 ,必须有某属性
    function selectGirl(girs) {
        this.girs = girs;
    }
    selectGirl.prototype.getGir = function (index) {
        return this.girs[index].name;
    };
    return selectGirl;
}());
var girArr = new selectGirl([
    {
        name: "a1",
        size: 181,
    },
    {
        name: "a2",
        size: 182,
    },
    {
        name: "a3",
        size: 183,
    },
]);
console.log(girArr.getGir(2));
