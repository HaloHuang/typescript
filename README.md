# typescript
高阶TS语法进阶
## 知识点梳理
### TS引用属性和真实场景应用
- 比如一笔订单里头有多个订单详情 Array<T>
### TS初始化变量初始化的形式（不想赋初值）
- public a: string | undefined (TS4之前)
- public a!: string (TS4之后)
- public a: string 然后在构造函数的参数前加public，它等同于两步1、用public定义了一个属性 2、默认的构造函数会给这个属性赋值（隐式操作）
## 思考：
### new一个对象实例发生的步骤？
1、创建一个对象，在堆中分配一个对象空间
2、调用对应的构造函数【构造器】，把构造函数中每个参数都赋值给对象属性
3、改变this的指向，也就是将实例变量指向创建的对象空间

### Generator函数
它其实是协程在ES6中的一种实现，它不会返回结果而是返回一个指针对象（遍历器）,最大的特点是可以交出函数的执行权也能恢复执行。所谓协程就是多个线程协调合作完成异步任务，整个函数是一个封装的异步任务容器，碰到yield就暂停执行函数
function* gen(x){
    var y = yield x+2;
    return y;
}
var g = gen(1); // g是返回的内部指针对象
g.next() // {value: 3, done: false} 调用next会移动内部指针，指向到第一个碰到yield的语句上
g.next() // {value: undefined, done: true} // done表示当前阶段的信息，value是yield语句后表达式的值

### 异步的实现方式
1、回调函数
2、事件监听
3、发布/订阅
4、Promise对象
5、Generator函数

### 继承的常见几种方式
1、原型链继承：就是Son构造函数的原型Son.prototype指向Parent构造函数的实例new Parent()
function Parent(name, age){
    this.name = name
    this.age = age
}
function Son(favor, sex){
    this.favor = favor
    this.sex = sex
}
Son.prototype = new Parent('HaloHuang', 30)
let sonObj = new Son('篮球', '男')