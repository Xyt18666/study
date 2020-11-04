class Lady {
    content = "hai";
    sayHello() {
        return this.content;
    }
}

class Jiejie extends Lady {
    sayHello() {
        return "改写" + super.sayHello();
    }
    sayLove() {
        return "love";
    }
}

let good = new Jiejie();

console.log(good.sayHello());
console.log(good.sayLove());

// -------------------------------------------

class Per {
    // 类的内部
    public name: string;
    protected size2: number = 18;
}
// 类的外部
let per = new Per();
per.name = "xxx";
console.log(per.name);

// 不约定访问类型时， 默认是 public ，类的 内部和外部都能调用
//  protected  只能在 内部谁用 ，在继承的时候 可以被继承
// private  只能在 内部谁用 ，继承也不可能使用

// --------------------------------------------------

// 类的构造函数
class Qwe {
    // names: string;
    constructor(public names: string) {
        //简写public names: string
        // this.names = names;
    }
}

let qwes = new Qwe("qwer");
console.log(qwes.names);

class qwers extends Qwe {
    constructor(public age: number) {
        super("xyt");
    }
}
let qwerss = new qwers(18);
// 构造函数 继承

// -------------------------------------------------------

class Xiaojiejie {
    public readonly _size: number; //定义只读属性
    constructor(private _age: number, size: number) {
        this._size = size;
    }
    get age() {
        return this._age - 10;
    }
    set age(age: number) {
        this._age = age + 5;
    }
    static sayHi() {
        console.log("hihihi");
    }
}
let dajiao = new Xiaojiejie(28, 15);
// console.log(dajiao._age);   无法直接获取
console.log(dajiao.age); // 只能通过get获取 ，此时是 处理后的 值

dajiao.age = 28;
// 通过set时也可以进行包装

Xiaojiejie.sayHi();
// 调用静态方法

// dajiao._size = 77;   无法修改只读属性

// -----------------------------------------------------------

abstract class ChouXiang {
    abstract skill();
}
// 定义基础类 ,子类继承,必须有该方法,否则报错

class zw1 extends ChouXiang {
    skill() {
        console.log("我是职位1");
    }
}
class zw2 extends ChouXiang {
    skill() {
        console.log("我是职位2");
    }
}
// class zw2 extends ChouXiang {
//     qwer() {         报错
//         console.log("我是职位22");
//     }
// }
