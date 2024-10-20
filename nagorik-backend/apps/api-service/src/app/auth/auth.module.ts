import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { BcryptService } from "@nagorik-backend/utils";
import { userSchema } from "@nagorik-backend/db-models";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'user-model', schema: userSchema }])],
  controllers: [AuthController],
  providers: [AuthService, BcryptService],
})

export class AuthModule {}
