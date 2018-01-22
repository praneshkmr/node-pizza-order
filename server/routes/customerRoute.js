import { Router } from 'express';
let router  = Router();

import { createCustomer } from "./../services/customerService";

router.post('/', function(req, res, next){
    let data = req.body;
    createCustomer(data)
        .then(function(customer){
            res.send(customer)
        })
        .catch(function(err){
            console.log(err)
            res.send(err)
        });
});

export default router;