import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

@Injectable()
export class BcryptService {
  private readonly logger = new Logger(BcryptService.name);

  constructor(private readonly configService: ConfigService) {}

  async hash(password: string): Promise<string> {
    try {
      const workFactor = Number(process.env['BCRYPT_WORK_FACTOR']);
      const salt = await bcrypt.genSalt(workFactor);
      const hashPass = await bcrypt.hash(password, salt);
      return hashPass;
    } catch (error) {
      this.logger.error('Error while hashing password', error);
      throw new Error('Something went wrong');
    }
  }

  async compare(
    userPassword: string,
    inputPassword: string,
  ): Promise<boolean> {
    try {
      return await bcrypt.compare(inputPassword, userPassword);
    } catch (error) {
      this.logger.error('Error while comparing passwords', error);
      throw new Error('Something went wrong');
    }
  }
}
