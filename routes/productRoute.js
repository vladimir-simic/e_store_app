import express from 'express';
import productAction from "../controllers/productController";

const router = express.Router();

router.get('/', productAction);

export default router;