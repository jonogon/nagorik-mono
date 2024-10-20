import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { UserOtpModel } from '@nagorik-backend/db-models';
import { UserOtpInterface } from '@nagorik-backend/interfaces';
import { BcryptService } from '@nagorik-backend/utils';

@Injectable()
export class AuthService {
  async sendOtp(userId: string, phone: string): Promise<{ message: string }> {
    const otp = Math.floor(1000 + Math.random() * 9000);
    const bcryptService = new BcryptService();
    const newOtp: UserOtpInterface = {
      otp: await bcryptService.hash(otp.toString()),
      userId,
      deliveryMethod: {
        type: 'sms',
        identity: phone,
      },
      reason: 'verify-phone',
      expiresAt: new Date(Date.now() + 5 * 60 * 1000),
      tryLimit: 5,
    };

    const userOtp = await UserOtpModel.findOneAndUpdate({ userId }, newOtp, {
      upsert: true,
    });

    return { message: 'OTP sent' };
  }

  async verifyOtp(userId: string, otp: string): Promise<{ message: string }> {
    const userOtp = await UserOtpModel.findOne({ userId });
    const bcryptService = new BcryptService();

    if (!userOtp) {
      return { message: 'Invalid User' };
    }

    if (!await bcryptService.compare(userOtp.otp, otp)) {
      return { message: 'Invalid OTP' };
    }

    if (userOtp.expiresAt < new Date()) {
      return { message: 'OTP expired' };
    }

    return { message: 'OTP verified' };
  }
}
