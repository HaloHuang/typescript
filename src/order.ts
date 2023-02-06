import OrderDetail from './orderDetail';
// TS中引用类型的属性，比如一笔订单里头多个订单详情例子
class Order {
    public orderId: number = 0;
    public orderDetailList: Array<OrderDetail> = []; // Array 引用类型属性, 每个值都是OrderDetail类对象
    public date: Date = new Date();
    public custName: string = 'nocustName'; // default

    constructor(orderId_: number, orderDetailList_: Array<OrderDetail>, date_: Date, custName_: string) {
        this.orderId = orderId_;
        this.orderDetailList = orderDetailList_;
        this.date = date_;
        this.custName = custName_;
    }
}

const orderDetailOne = new OrderDetail(10, '钢笔', 50, 20);
const orderDetailTwo = new OrderDetail(11, '水性笔', 10, 20);
const orderDate = new Date(2023, 10, 17, 5, 20, 0);
let order = new Order(1, [orderDetailOne, orderDetailTwo], orderDate, 'huangyifei');
console.log('order--->', order);