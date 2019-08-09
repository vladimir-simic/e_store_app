import express from 'express';
import { userAction, getUserById } from '../controllers/userController';

const router = express.Router();

router.get('/', userAction);
router.get('/:userId', getUserById);

export default router;