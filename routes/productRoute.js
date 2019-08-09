import express from 'express';
// import productAction from '../controllers/productController';
// import productId from '../controllers/productController';
import { productAction, getProductById, addNewProduct, modifyProduct } from '../controllers/productController';

const router = express.Router();

router.get('/', productAction);
router.put('/:productId', modifyProduct);
router.get('/:productId', getProductById);
// router.post('/', (req, res) => res.send('ok'));
router.post('/', modifyProduct);


export default router;
