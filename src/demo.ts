// // TS文件默认是全局环境，文件使用模块化就会变成局部环境
// // TS 基本类型
// let name: string = 'HaloHuang';
// let arr1: number[] = [1, 2, 3];
// let arr2: Array<number> = [1, 2, 3];
// // 类型映射
// type A = {
//     [P in 'username' | 'age']: string;
// }
// keyof
// interface Iobj {
//     name: string;
//     age: number;
// }
// keyof Iobj -> 'name' | 'age'
// type B = keyof Iobj;
// let student: B = 'age';

// // 类型保护
// // typeof类型保护
// function foo1(n: string|number) {
//     if(typeof n === "string"){
//         console.log(n.length)
//     }
// }
// // in类型保护
// type A = {
//     username: string;
// }
// type B = {
//     age: number;
// }
// function foo2(n: A|B){
//     if('username' in n){
//         console.log(n.username);
//     }
// }
// // instanceof类型保护
// class A {
//     username = '小明'
// }
// class B {
//     age = 20
// }
// function C(n: A|B){
//     if(n instanceof A){
//         console.log(n.username);
//     }
// }
// // 字面量类型保护
// function foo3(n: 'username'|123){
//     if(n === 'username'){
//         console.log(n.length);
//     }
// }
// // 自定义类型保护，is类型谓词
// function isString(n: any): n is string{
//     return typeof n === "string";
// }
// function foo4(n: string|number) {
//     if(isString(n)){
//         console.log(n.length);
//     }
// }

// // 定义泛型和泛型常见操作
// // 函数应用
// function foo<T>(n: T){}
// foo<string>('hello');
// foo(123)
// // 函数与接口结合使用
// interface A<T> {
//     (n?: T): void;
//     default?: T;
// }
// let foo: A<string> = (n) => {};
// foo('hello');
// foo.default = 'world';
// // 泛型约束： T extends A
// type A =  string;
// function foo<T extends A>(n: T) { }
// foo('hello')
// 内置工具类型
// Partial、Readonly、Pick、Record、Required、Omit、Exclude、Extract、NonNullable、Parameters、ReturnType
type A = {
    username: string;
    age: number;
}
// Readonly工具源码，A类型中的属性变成只读项
type MyReadonly<T> = {
    readonly [P in keyof T]: T[P]
} 
type B = MyReadonly<A> ;

// Partial工具源码，将A类型中的所有属性变成可选项
type MyPartial<T> = {
    [P in keyof T]?: T[P]
}
type C = MyPartial<A> ;

// Required工具源码，将A类型中的所有可选项去除掉
type MyRequired<T> = { 
    [P in keyof T]-?: T[P]
}
type D = MyRequired<A> ; 

// Exclude工具源码，去除了string属性，留下除string以外的其他属性
type MyExclude<T, U> =  T extends U ? never: T;
type E = MyExclude<string|number|boolean, string>

// Extract工具源码，选择的string属性留下，其他的属性去掉了
type MyExtract<T, U> = T extends U ? T: never;
type F = MyExtract<string|number|boolean, string>

// Pick工具源码，筛选出A类型中的username，keyof T 这里是将T转成联合类型， K extends keyof T是对传入泛型进行约束
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}
type G = MyPick<A, 'username'> ;

// Omit工具源码，和Pick是相反操作，取Pick后的其他所剩属性项
type MyOmit<T, K extends keyof any> = MyPick<T, MyExclude<keyof T, K>>
type H = MyOmit<A, 'username'> ; 

// Record工具源码，将A类型中的某age属性变成string类型，
type MyRecord<K extends keyof any, T> = {
    [P in K]: T
}
type I= MyRecord<'age', string> ;



export {};
