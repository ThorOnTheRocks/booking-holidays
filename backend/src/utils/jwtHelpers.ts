import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const jwtSecret = process.env.JWT_SECRET_KEY as string;

export const generateToken = (userId: string): string => {
  return jwt.sign({ userId }, jwtSecret, { expiresIn: '1h' });
};

export const verifyToken = (token: string): string | object => {
  return jwt.verify(token, jwtSecret);
};
