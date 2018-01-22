import { incrementCounter } from "./../DAO/mongo/counterDAO";

export function getNextCustomerId() {
    return incrementCounter({ "entity": "customer" });
}