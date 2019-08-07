import express from 'express';
import categoryAction from "../controllers/categoryController";

const router = express.Router();

router.get('/', categoryAction);

export default router;
