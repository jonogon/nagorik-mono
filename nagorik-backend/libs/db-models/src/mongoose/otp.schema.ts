import { Schema, model, Model } from 'mongoose';

import { UserOtpInterface } from '@nagorik-backend/interfaces';

const userOtpSchema = new Schema<UserOtpInterface>(
  {
    otp: { type: String, required: true },
    userId: { type: String, required: true, unique: true },
    deliveryMethod: {
      type: {
        type: String,
        enum: ['sms', 'email', 'app-notification', 'push-notification'],
        required: true,
      },
      identity: { type: String, required: true },
    },
    reason: {
      type: String,
      enum: [
        'verify-phone',
        'reset-password',
        'forget-password',
        'edit-profile',
      ],
      required: true,
    },
    expiresAt: { type: Date, required: true },
    tryLimit: { type: Number, required: true, default: 5 },
  },
  {
    timestamps: true,
  }
);

export const UserOtpModel = model<UserOtpInterface>('user-otp', userOtpSchema);


