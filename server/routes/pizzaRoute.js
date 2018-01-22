import { Router } from 'express';
import { makePizza } from './../services/pizzaService';
let router  = Router();

router.get('/', function(req, res, next){
    res.send("Blah")
    makePizza({});
});

export default router;