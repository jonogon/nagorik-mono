import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { ClientsModule, Transport } from "@nestjs/microservices";
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'API_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5669'],
          queue: 'api_service_queue',
          queueOptions: {
            durable: false
          },
        },
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
