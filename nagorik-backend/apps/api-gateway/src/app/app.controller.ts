import { Controller, Get, Post, Body } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('/hello')
  getHello(): string {
    console.log('hello');
    return 'Hello World!';
  }

  @Get('/ping-api')
  getData() {
    console.log('ping-api');
    return this.appService.pingApiService();
  }

  @Post('/users')
  createUser(
    @Body('phone') phone: string,
    @Body('fullname') fullname: string,
    @Body('password') password: string,
    @Body('email') email?: string
  ) {
    console.log('create-user');
    return this.appService.createUser(phone, fullname, password, email);
  }
}
