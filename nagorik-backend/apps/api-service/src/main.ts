/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions,Transport } from '@nestjs/microservices';

import { AppModule } from './app/app.module';

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RMQ_URL1],
      queue: process.env.RMQ_API_QUEUE,
      queueOptions: {
        durable: false
      },
    }
  });

  await app.listen();
  logger.log("API Service is listening...");
}

bootstrap();
