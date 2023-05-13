import OrderDetail from './orderDetail';
// TS中引用类型的属性，比如一笔订单里头多个订单详情例子
class Order {
    // 知识点：给构造器的参数加上public，参数就变成了属性
    // 等同于：1、用public定义了一个属性 2、默认的构造函数会给这个属性赋值（隐式操作）
    // public orderId: number;
    // public orderDetailList: Array<OrderDetail>; // Array 引用类型属性, 每个值都是OrderDetail类对象
    // public date: Date;
    // public custName: string; // default

    constructor(public orderId_: number, public orderDetailList_: Array<OrderDetail>, public date_: Date, public custName_: string) {
        // this.orderId = orderId_;
        // this.orderDetailList = orde rDetailList_;
        // this.date = date_;
        // this.custName = custName_;
    }
}

const orderDetailOne = new OrderDetail(10, '钢笔', 50, 20);
const orderDetailTwo = new OrderDetail(11, '水性笔', 10, 20);
const orderDate = new Date(2023, 10, 17, 5, 20, 0);
let order = new Order(1, [orderDetailOne, orderDetailTwo], orderDate, 'huangyifei');
console.log('order--->', order);
