import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

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
    ClientsModule.register([
      {
        name: process.env.RMQ_API_SERVICE_NAME,
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RMQ_URL1],
          queue: process.env.RMQ_API_QUEUE,
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
