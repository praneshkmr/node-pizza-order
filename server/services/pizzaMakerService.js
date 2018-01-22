import { updateOrderStatus } from "./orderService";

export function preparePizzaDough(order) {
    let status = 'dough-prep';
    return processPizza(order, status);
}

export function ovenBakePizza(order) {
    let status = 'oven-bake';
    return processPizza(order, status);
}

export function topArtOnPizza(order) {
    let status = 'topping-art';
    return processPizza(order, status);
}

export function makeReadyPizza(order) {
    let status = 'ready';
    return processPizza(order, status);
}

function processPizza(order, status) {
    order.status = status;
    order.items.forEach(item => {
        item.status = status;
    });
    var promise = new Promise(function (resolve, reject) {
        updateOrderStatus(order)
            .then(function (order) {
                // To Simulate Async Task
                let timeoutSeconds = getRandomSeconds();
                console.log("Time out after : %s ", timeoutSeconds);
                setTimeout(function () {
                    console.log(status + " : Done");
                    resolve(order);
                }, timeoutSeconds);
            })
            .catch(function (err) {
                reject(err);
            });
    });
    return promise;
}

function getRandomSeconds() {
    return Math.floor((Math.random() * 3000) + 2000);
}