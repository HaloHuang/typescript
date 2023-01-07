/**
 * Author: HaloHuang
 * Date: 2023-01-06
 */
class Person {
    // 属性，public是访问修饰符，还有私有访问private
    // public name: string | undefined; //ts4.0之前解决name未初始化赋值的方法就是添加undefined
    public name: string = 'HaloHuang'
    public age: number = 29
    public phone: string= '15016740909'

    // 构造器
    constructor(name_: string, age_: number, phone_: string) {
        this.name = name_;
        this.age = age_;
        this.phone = phone_;
    }

    // 方法，默认返回值是void
    public eat(who: String, address: String): void {
        console.log(`${this.name}今天${this.age}岁生日，和${who}一起在${address}吃饭`);
    }
}

let Feigo = new Person('HaloHuang', 29, '15016740909');
Feigo.eat('Zhangsan', '科技园');

// 思考：new一个对象实例发生的步骤？
// 1、创建一个对象，在堆中分配一个对象空间
// 2、调用对应的构造函数【构造器】，把构造函数中每个参数都赋值给对象属性
// 3、改变this的指向，也就是将实例变量指向创建的对象空间