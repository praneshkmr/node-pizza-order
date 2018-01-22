import { incrementCounter } from "./../DAO/mongo/counterDAO";

export function getNextCustomerId() {
    return incrementCounter({ "entity": "customer" });
}

export function getNextPizzaId() {
    return incrementCounter({ "entity": "pizza" });
}

export function getNextOrderId() {
    return incrementCounter({ "entity": "order" });
}

export function getNextOrderItemId() {
    return incrementCounter({ "entity": "orderItem" });
}
