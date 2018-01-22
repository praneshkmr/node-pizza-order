import { Router } from 'express';
import { createOrder, getOrderbyId, getOrderItemById } from './../services/orderService';
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

router.get('/:orderId', function(req, res, next){
    let { orderId } = req.params;
    getOrderbyId(orderId)
        .then(function(order){
            res.send(order);
        })
        .catch(function(err){
            console.log(err);
            res.send(err);
        });
});

router.get('/:orderId/items/:itemId', function(req, res, next){
    let { orderId, itemId } = req.params;
    getOrderItemById(orderId, itemId)
        .then(function(orderitem){
            res.send(orderitem);
        })
        .catch(function(err){
            console.log(err);
            res.send(err);
        });
});

export default router;