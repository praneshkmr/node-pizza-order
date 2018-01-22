import { saveOrder, fetchOrderItemById, fetchOrderById, updateOrderById } from "./../DAO/mongo/orderDAO";
import { getNextOrderId, getNextOrderItemId } from "./counterService";
import { getPizzaById } from "./pizzaService";
import { preparePizzaDough, ovenBakePizza, topArtOnPizza, makeReadyPizza } from "./pizzaMakerService";
import { notifyBySMS, notifyByEmail } from "./notificationService";
import { getCustomerById } from "./customerService";
import { Promise } from "mongoose";

export function createOrder(data) {
    let totalPrice = 0;
    return getNextOrderId()
        .then(function (counter) {
            let nextId = counter.count;
            data.id = nextId;
            var promises = [];
            data.items.forEach(item => {
                let orderItemPromise = getNextOrderItemId().then(function (counter) {
                    let nextId = counter.count;
                    item.id = nextId;
                });
                let pizzaObjPromise = getPizzaById(item.pizza).then(function (pizza) {
                    item.pizzaObj = pizza;
                    item.status = 'placed';
                    item.itemPrice = pizza.price;
                    item.price = parseInt(item.quantity) * parseFloat(item.itemPrice);
                    totalPrice += item.price;
                })
                promises.push(orderItemPromise, pizzaObjPromise);
            });
            return Promise.all(promises);
        })
        .then(function () {
            data.status = 'placed';
            data.totalPrice = totalPrice;
            return data;
        })
        .then(saveOrder)
        .then(function (order) {
            let customerObj = null;
            getCustomerById(order.customer).then(function (customer) {
                customerObj = customer;
            })
            preparePizzaDough(order)
                .then(ovenBakePizza)
                .then(topArtOnPizza)
                .then(makeReadyPizza)
                .then(function (order) {
                    let message = "Your Order is Ready";
                    return notifyBySMS(customerObj.mobile, message)
                        .then(function () {
                            return notifyByEmail(customerObj.email, message);
                        })
                })
            return order;
        });
}

export function getOrderbyId(orderId) {
    return fetchOrderById(orderId);
}

export function getOrderItemById(orderId, itemId) {
    return fetchOrderItemById(orderId, itemId);
}

export function updateOrderStatus(order) {
    return updateOrderById(order.id, order);
}
