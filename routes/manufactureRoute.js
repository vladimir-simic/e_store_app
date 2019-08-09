import express from 'express';
// import manufactureAction from "../controllers/manufactureController";
import { manufactureAction, getManufactureById, addNewManufacture } from "../controllers/manufactureController";

const router = express.Router();

router.get('/', manufactureAction);
router.get('/:manufactureId', getManufactureById);
router.post('/', addNewManufacture);

export default router;
