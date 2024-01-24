import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { generateToken } from '../utils/jwtHelpers.ts';
import User from '../models/User/User.ts';

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: 'Invalid credentials' });
    }

    const isMatch = await Bun.password.verify(
      password,
      user?.password
    );
    if (!isMatch) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user.id);
    res.cookie('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 86400000,
    });
    res.status(StatusCodes.OK).json({ userId: user._id });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Something went wrong!' });
  }
};
