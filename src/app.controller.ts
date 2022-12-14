import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiHeader } from '@nestjs/swagger';
import { User } from '@prisma/client';

import { AppService } from './app.service';
import { AuthService } from 'src/auth/auth.service';
import { LoginInput } from 'src/auth/dto/login.input';
import { AuthedUser } from 'src/users/authedUser.decorator';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService
  ) {}

  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer ${idToken}',
  })
  @UseGuards(AuthGuard('jwt'))
  @Get()
  getHello(@AuthedUser() user: User): string {
    return `${this.appService.getHello()} ${user.lastname}`;
  }

  @Get('hello/:name')
  getHelloName(@Param('name') name: string): string {
    return this.appService.getHelloName(name);
  }

  @Post('auth/login')
  async login(@Body() { email, password }: LoginInput) {
    return await this.authService.login(email, password);
  }
}
