import { Schema, model, Model } from 'mongoose';


type DeliveryMethodType = 'sms' | 'email' | 'app-notification' | 'push-notification';
type OtpReasonType = 'verify-phone' | 'reset-password' | 'forget-password' | 'edit-profile';

interface UserOtpInterface {
  otp: string;
  userId: string;
  deliveryMethod: {
    type: DeliveryMethodType;
    identity: string;
  };
  reason: OtpReasonType;
  expiresAt: Date;
  tryLimit: number;
}

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


