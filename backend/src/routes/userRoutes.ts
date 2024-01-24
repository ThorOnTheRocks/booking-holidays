import express from 'express';
import { register } from '../controllers/userController.ts';
import { validateRequest } from '../middlewares/userMiddleware.ts';
import { registrationSchema } from '../schemas/userSchema.ts';

const router = express.Router();

router.post(
  '/register',
  validateRequest(registrationSchema),
  register
);

export default router;
