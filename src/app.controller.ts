import { Controller, Get, UseGuards, Req, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('google')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.appService.googleLogin(req)
  }
  // @Post('/signin')
  // @UseGuards(LoginGuard)
  // signin(@Request() req: IUserRequest): void {
  //     console.log(`@AuthController ${JSON.stringify(req.user)}`)
  // }
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
