import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { MongoDbConnectionService } from '@nagorik-backend/db-connections';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import microserviceConfig from '../config/microservice';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
      load: [microserviceConfig],
    }),
    MongooseModule.forRootAsync({
      useClass: MongoDbConnectionService,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
