import express from 'express';
// import orderAction from "../controllers/orderController";
import { orderAction, getOrderById } from "../controllers/orderController";

const router = express.Router();

router.get('/', orderAction);
router.get('/:id', getOrderById);

export default router;
