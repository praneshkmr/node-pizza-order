import Customer from "./../../models/customer";

export function saveCustomer(data) {
    var customer = new Customer(data);
    return customer.save();
}

export function fetchCustomerById(id) {
    return Customer.findOne({ "id": id });
}