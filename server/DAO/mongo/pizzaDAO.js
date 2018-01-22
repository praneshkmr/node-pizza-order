import Pizza from "./../../models/pizza";

export function savePizza(data) {
    var pizza = new Pizza(data);
    return pizza.save();
}

export function fetchPizzaById(id) {
    return Pizza.findOne({ "id": id });
}