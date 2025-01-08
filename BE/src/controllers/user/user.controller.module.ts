import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { UserServiceModule } from 'src/services/user/user.service.module';

@Module({
  imports: [UserServiceModule],
  controllers: [UsersController],
})
export class UserControllerModule {}
