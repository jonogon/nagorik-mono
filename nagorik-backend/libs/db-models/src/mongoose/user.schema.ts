import { Schema, model } from 'mongoose';

import { UserInterface } from '@nagorik-backend/interfaces';

export const userSchema = new Schema<UserInterface>(
  {
    phone: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    roles: {
      type: [{ type: String, enum: ['user', 'developer'] }],
      default: ['user'],
    },
    email: { type: String },
    isPhoneVerified: { type: Boolean, default: false },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const UserModel = model<UserInterface>('user', userSchema);
