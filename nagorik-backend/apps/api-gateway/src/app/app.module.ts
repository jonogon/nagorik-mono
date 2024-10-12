import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { ClientsModule, Transport } from "@nestjs/microservices";
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'API_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 8888
        }
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
