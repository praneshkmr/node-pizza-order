import { Router } from 'express';
import { createPizza } from './../services/pizzaService';
let router  = Router();

router.post('/', function(req, res, next){
    let data = req.body;
    createPizza(data)
        .then(function(pizza){
            res.send(pizza)
        })
        .catch(function(err){
            console.log(err)
            res.send(err)
        });
});

export default router;