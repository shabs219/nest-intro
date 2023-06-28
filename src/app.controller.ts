import { Controller, Get, Post } from '@nestjs/common'
import { AppService, AppService1 } from './app.service'

@Controller()
export class AppController {
  constructor (
    private readonly appService: AppService,
    private readonly appService1: AppService1,
  ) {}
  // constructor(private readonly appService1: AppService1) {}

  @Get()
  getHello (): Promise<any> {
    return this.appService.getHello()
  }

  @Get('hai')
  getHello1 (): { hai: number } {
    return this.appService1.getHello()
  }
}
