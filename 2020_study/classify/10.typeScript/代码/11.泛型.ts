function join<xyt, p>(a: xyt, b: p) {
    return `${a}${b}`;
}
join<string, number>("aa", 1);

function myFn<fx>(arr: fx[]) {
    console.log(arr);
}
// function myFn<fx>(arr: Array<fx>) {
//     console.log(arr);
// }
myFn<string>(["123", "sef"]);
// -------------------------------------------------

// class selectGirl {       看着混乱
//     constructor(private girs: string[] | number[]) {}
//     getGir(index: number): string | number {
//         return this.girs[index];
//     }
// }
// let girArr = new selectGirl(["a", "b", "c"]);
// console.log(girArr.getGir(2));

interface gir {
    name: string;
}
// 使用泛型改写
class selectGirl<T extends gir> {
    // 泛型 继承自 某接口 ,必须有某属性

    /*
        <T extends string | number>
        泛型约束 ，必需是某类型
    
    
    */
    constructor(private girs: T[]) {}
    getGir(index: number): string {
        return this.girs[index].name;
    }
}
let girArr = new selectGirl([
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
