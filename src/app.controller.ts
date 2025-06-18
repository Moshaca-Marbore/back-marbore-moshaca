import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { NormalException } from './common/exceptions/normal.exception';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  triggerNormal() {
    throw new NormalException();
  }
}
