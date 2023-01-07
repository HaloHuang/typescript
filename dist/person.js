"use strict";
/**
 * Author: HaloHuang
 * Date: 2023-01-06
 */
var Person = /** @class */ (function () {
    // 构造器
    function Person(name_, age_, phone_) {
        // 属性，public是访问修饰符，还有私有访问private
        // public name: string | undefined; //ts4.0之前解决name未初始化赋值的方法就是添加undefined
        this.name = 'HaloHuang';
        this.age = 29;
        this.phone = '15016740909';
        this.name = name_;
        this.age = age_;
        this.phone = phone_;
    }
    // 方法，默认返回值是void
    Person.prototype.eat = function (who, address) {
        console.log("".concat(this.name, "\u4ECA\u5929").concat(this.age, "\u5C81\u751F\u65E5\uFF0C\u548C").concat(who, "\u4E00\u8D77\u5728").concat(address, "\u5403\u996D"));
    };
    return Person;
}());
var Feigo = new Person('HaloHuang', 29, '15016740909');
Feigo.eat('Zhangsan', '科技园');
// 思考：new一个对象实例发生的步骤？
// 1、创建一个对象，在堆中分配一个对象空间
// 2、调用对应的构造函数【构造器】，把构造函数中每个参数都赋值给对象属性
// 3、改变this的指向，也就是将实例变量指向创建的对象空间
