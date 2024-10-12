/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from "@nestjs/core";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { AppModule } from "./app/app.module";
import { Logger } from "@nestjs/common";

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.TCP,
    options: {
      host: "127.0.0.1",
      port: 8888
    }
  });
  await app.listen();
  logger.log("API Service is listening...");
}
bootstrap();
