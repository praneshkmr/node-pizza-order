import { incrementCounter } from "./../DAO/mongo/counterDAO";

export function getNextCustomerId() {
    return incrementCounter({ "entity": "customer" });
}

export function getNextPizzaId() {
    return incrementCounter({ "entity": "pizza" });
}