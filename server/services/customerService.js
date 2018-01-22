import { saveCustomer, fetchCustomerById } from "./../DAO/mongo/customerDAO";
import { getNextCustomerId } from "./counterService";

export function createCustomer(data){
    return getNextCustomerId()
        .then(function(counter){
            let nextId = counter.count;
            data.id = nextId;
            return data;
        })
        .then(saveCustomer);
}

export function getCustomerById(id) {
    return fetchCustomerById(id);
}