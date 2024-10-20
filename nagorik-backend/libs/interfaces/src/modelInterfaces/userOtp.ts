import { Types } from 'mongoose'
import { CorrectedDocument } from '../typeInterfaces/type'

type DeliveryMethodType = 'sms' | 'email' | 'app-notification' | 'push-notification';
type OtpReasonType = 'verify-phone' | 'reset-password' | 'forget-password' | 'edit-profile';

export interface UserOtpInterface {
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

export type UserOtpDoc = UserOtpInterface & CorrectedDocument
