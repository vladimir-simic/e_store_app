import express from 'express';
// import categoryAction from "../controllers/categoryController";
import { categoryAction, getCategoryById, addNewCategory } from '../controllers/categoryController';

const router = express.Router();

router.get('/', categoryAction);
router.get('/:categoryId', getCategoryById);
router.post('/', addNewCategory);

export default router;
