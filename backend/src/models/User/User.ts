import mongoose from 'mongoose';
import type { UserType } from './User.types.ts';

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  username: { type: String, unique: true, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await Bun.password.hash(this.password, {
      algorithm: 'bcrypt',
      cost: 4,
    });
  }
  next();
});

const User = mongoose.model<UserType>('User', userSchema);

export default User;
