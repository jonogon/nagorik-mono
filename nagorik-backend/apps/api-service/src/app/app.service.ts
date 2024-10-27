import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  sendOtp(): { message: string } {
    return { message: 'OTP sent' };
  }

  verifyOtp(): { message: string } {
    return { message: 'OTP verified' };
  }

}
