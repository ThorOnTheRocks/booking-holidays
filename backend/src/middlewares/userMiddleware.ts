import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { StatusCodes } from 'http-status-codes';

export const validateRequest = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if (error) {
      const errorMessage = error.details.map(
        (detail) => detail.message
      );
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: errorMessage });
    }
    next();
  };
};
