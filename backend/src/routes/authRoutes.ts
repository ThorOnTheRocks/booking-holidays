import express from 'express';
import { validateRequest } from '../middlewares/userMiddleware.ts';
import { verifyToken } from '../middlewares/authMiddleware.ts';
import { loginSchema } from '../schemas/authSchema.ts';
import {
  login,
  getToken,
  logout,
} from '../controllers/authController.ts';

const router = express.Router();

router.post('/login', validateRequest(loginSchema), login);
router.get('/validate-token', verifyToken, getToken);
router.post('/logout', logout);

export default router;
