import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}

interface MyJwtPayload {
  userId: string;
}

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies['aut_token'];
  if (!token) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: 'Unauthorized 🚫' });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY as string
    );
    req.userId = (decoded as MyJwtPayload).userId;
    next();
  } catch (error) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: 'unauthorized' });
  }
};
