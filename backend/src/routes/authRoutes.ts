import express from 'express';
import { validateRequest } from '../middlewares/userMiddleware.ts';
import { loginSchema } from '../schemas/authSchema.ts';
import { login } from '../controllers/authController.ts';

const router = express.Router();

router.post('/login', validateRequest(loginSchema), login);

export default router;
