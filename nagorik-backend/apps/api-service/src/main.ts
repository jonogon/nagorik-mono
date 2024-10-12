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
      urls: ['amqp://localhost:5669'],
      queue: 'api_service_queue',
      queueOptions: {
        durable: false
      },
    }
  });

  await app.listen();
  logger.log("API Service is listening...");
}

bootstrap();
