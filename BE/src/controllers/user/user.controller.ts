import { Body, Controller, Post } from '@nestjs/common';
import { RegisterUserBodyDTO } from 'src/dtos/auth/create-user.dto';
import { UserService } from 'src/services/user/user.service';

@Controller('user')
export class UsersController {
  constructor(private userService: UserService) {}
  @Post()
  async register(@Body() RegisterUserBodyDTO: RegisterUserBodyDTO) {
    return this.userService.create(RegisterUserBodyDTO);
  }
}
