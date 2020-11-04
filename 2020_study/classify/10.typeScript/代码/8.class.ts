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
