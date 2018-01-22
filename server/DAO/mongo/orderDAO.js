import Order from "./../../models/order";

export function saveOrder(data) {
    var order = new Order(data);
    return order.save();
}

export function fetchOrderById(orderId) {
    return Order.findOne({ "id": orderId });
}

export function fetchOrderItemById(orderId, itemId) {
    return Order
        .findOne({ "id": orderId })
        .elemMatch('items',{ id: itemId })
        .then(function(order){
            return(order.items[0]);
        });
}