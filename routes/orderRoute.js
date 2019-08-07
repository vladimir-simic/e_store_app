import express from 'express';
import orderAction from "../controllers/orderController";

const router = express.Router();

router.get('/', orderAction);

export default router;
