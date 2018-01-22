import { Router } from 'express';
import { createOrder } from './../services/orderService';
let router  = Router();

router.post('/', function(req, res, next){
    let data = req.body;
    createOrder(data)
        .then(function(order){
            res.send(order);
        })
        .catch(function(err){
            console.log(err);
            res.send(err);
        });
});

export default router;