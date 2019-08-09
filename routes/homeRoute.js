import express from 'express';
// import indexAction from "../controllers/homeController";
import { userAction, getUserById, addNewUser } from '../controllers/homeController';

const router = express.Router();

router.get('/', userAction);
router.get('/:userId', getUserById);
router.post('/', addNewUser);

export default router;
