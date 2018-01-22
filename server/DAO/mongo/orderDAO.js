import Order from "./../../models/order";

export function saveOrder(data) {
    var order = new Order(data);
    return order.save();
}