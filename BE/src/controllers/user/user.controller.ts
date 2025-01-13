import { Body, Controller, Get, Post } from '@nestjs/common';
import { PublicRouter, User } from 'src/decorators/public-router.decorator';
import { RegisterUserBodyDTO } from 'src/dtos/auth/create-user.dto';
import { UserService } from 'src/services/user/user.service';
import { UserNoPassword } from 'src/types/user.type';

@Controller('user')
export class UsersController {
  constructor(private userService: UserService) {}
  @Post()
  @PublicRouter()
  async register(@Body() RegisterUserBodyDTO: RegisterUserBodyDTO) {
    return this.userService.create(RegisterUserBodyDTO);
  }

  @Get('user-information')
  async getUser(@User() user: UserNoPassword): Promise<UserNoPassword | null> {
    const users: UserNoPassword | null = await this.userService.findOneByPhone(
      user.phone,
    );
    if (users) {
      delete users.password;
    }
    return users;
  }
}
