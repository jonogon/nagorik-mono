import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";

import { AuthService } from "./auth.service";

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {

  }

  @MessagePattern({ cmd: "send-otp" })
  async sendOtp(userId: string, phone: string) {
    const sentOtp = await this.authService.sendOtp(userId, phone);
    return sentOtp;
  }

  @MessagePattern({ cmd: "verify-otp" })
  async verifyOtp(userId: string, otp: string) {
    const verifiedOtp = await this.authService.verifyOtp(userId, otp);
    return verifiedOtp;
  }
}
