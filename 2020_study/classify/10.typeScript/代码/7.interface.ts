let scree = (name: string, age: number, bust: number) => {
    age < 24 && bust > 90 && console.log("ok");
    age >= 24 || (bust < 90 && console.log("no"));
};
scree("xx", 18, 96);
// ---------------------------------------
interface Girl {
    name: string;
    age: number;
    bust: number;
    is?: Boolean;
    [propname: string]: any; //添加自定义属性，不受约束
}

let girls = {
    name: "string",
    age: 14,
    bust: 100,
    ok: "okk",
};
let scree2 = (girl: Girl) => {
    console.log(girl.name, girl.age, girl.bust);
};
scree2(girls);

class Jicheng implements Girl {
    name = "string";
    age = 18;
    bust = 14;
}
// 让class受到接口的约束

interface Jichen extends Girl {
    say(): string;
}
// 接口的继承

interface Person {
    // 只读属性
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom: Person = {
    id: 89757,
    name: "Tom",
    gender: "male",
};

// tom.id = 9527;  报错
