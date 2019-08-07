import express from 'express';
import manufactureAction from "../controllers/manufactureController";

const router = express.Router();

router.get('/', manufactureAction);

export default router;
