import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.ts';

dotenv.config();

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/users', userRoutes);

app.get('/api/test', async (req: Request, res: Response) => {
  res.json({ message: 'hello from express endpoint!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
