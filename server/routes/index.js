import { Router } from 'express';
let router  = Router();

import pizzaRoute from "./pizzaRoute";
import customerRoute from "./customerRoute";
import orderRoute from "./orderRoute";

router.use('/pizzas', pizzaRoute);
router.use('/customers', customerRoute);
router.use('/orders', orderRoute);

export default router;