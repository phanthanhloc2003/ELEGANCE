import { Controller, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/guard/local-auth.guard';
import { Authservices } from 'src/services/auth/auth.service';
import { PublicRouter, User } from 'src/decorators/public-router.decorator';
import { UserNoPassword } from 'src/types/user.type';

@Controller('auth')
export class AuthController {
  constructor(private authService: Authservices) {}
  @Post('login')
  @PublicRouter()
  @UseGuards(LocalAuthGuard)
  async login(@User() user: UserNoPassword) {
    return this.authService.login(user);
  }
}
