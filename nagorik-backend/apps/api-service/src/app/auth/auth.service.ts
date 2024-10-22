import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { UserOtpModel, userSchema } from '@nagorik-backend/db-models';
import { UserInterface, UserOtpInterface } from '@nagorik-backend/interfaces';
import { BcryptService } from '@nagorik-backend/utils';

@Injectable()
export class AuthService {
  constructor(private readonly bcryptService: BcryptService,@InjectModel('user') private userModel: Model<UserInterface>) {}

  async sendOtp(userId: string, phone: string): Promise<{ message: string }> {
    const otp = Math.floor(1000 + Math.random() * 9000);
    const newOtp: UserOtpInterface = {
      otp: await this.bcryptService.hash(otp.toString()),
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

    if (!userOtp) {
      return { message: 'Invalid User' };
    }

    if (!(await this.bcryptService.compare(userOtp.otp, otp))) {
      return { message: 'Invalid OTP' };
    }

    if (userOtp.expiresAt < new Date()) {
      return { message: 'OTP expired' };
    }

    return { message: 'OTP verified' };
  }

  async createUser(
    phone: string,
    fullname: string,
    password: string,
    email?: string
  ): Promise<any> {
    const hashedPassword = await this.bcryptService.hash(password);

    const userObj: UserInterface = {
      phone: String(phone),
      fullName: String(fullname),
      password: hashedPassword,
      email: String(email),
      roles: ['user'],
      isPhoneVerified: false,
    };

    const newUser = await this.userModel.create(userObj);
    return newUser;
  }
}
