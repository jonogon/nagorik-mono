import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import microserviceConfig from '../config/microservice';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: `.env.${process.env.NODE_ENV}`,
    load: [microserviceConfig],
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
