import { Controller, Get, Header, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('content-type', 'text/javascript')
  getHello(@Res() res) {
    return res.sendFile('Tracker.js', { root: 'dist' });
  }
}
