import { saveOrder } from "./../DAO/mongo/orderDAO";
import { getNextOrderId, getNextOrderItemId } from "./counterService";
import { getPizzaById } from "./pizzaService";
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
            console.log(data);
            return data;
        })
        .then(saveOrder);
}