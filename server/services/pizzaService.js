import { savePizza, fetchPizzaById } from "./../DAO/mongo/pizzaDAO";
import { getNextPizzaId } from "./counterService";

const PIZZA_SIZE = "M";

export function createPizza(data) {
    return getNextPizzaId()
        .then(function (counter) {
            let nextId = counter.count;
            data.id = nextId;
            return data;
        })
        .then(function (data) {
            data.size = PIZZA_SIZE;
            return data;
        })
        .then(savePizza);
}

export function getPizzaById(id) {
    return fetchPizzaById(id);
}