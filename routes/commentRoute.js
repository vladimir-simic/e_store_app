import express from 'express';
import { commentAction, getCommentById, addNewComment } from '../controllers/CommentController';

const router = express.Router();

router.get('/', commentAction);
router.post('/', addNewComment);
router.get('/:productId', getCommentById);

export default router;