import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { generateToken } from '../utils/jwtHelpers.ts';
import User from '../models/User/User.ts';

export const register = async (req: Request, res: Response) => {
  const { email } = req.body;
  try {
    let user = await User.findOne({
      email,
    });

    if (user) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: 'User already exists' });
    }

    user = new User(req.body);
    await user.save();

    const token = generateToken(user.id);

    res.cookie('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 86400000,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ message: 'User registered OK' });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Something went wrong' });
  }
};
