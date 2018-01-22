import { Router } from 'express';
let router  = Router();

import pizzaRoute from "./pizzaRoute";
import customerRoute from "./customerRoute";

router.use('/pizzas', pizzaRoute);
router.use('/customers', customerRoute);

export default router;