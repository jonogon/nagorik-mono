import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get("/hello")
  getHello(): string {
    console.log("hello");
    return "Hello World!";
  }

  @Get("/ping-api")
  getData() {
    console.log("ping-api");
    return this.appService.pingApiService();
  }
}
