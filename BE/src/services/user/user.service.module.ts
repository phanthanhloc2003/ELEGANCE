import { Module } from '@nestjs/common';

import { DatabaseModule } from 'src/db/database.module';
import { UserProviders } from 'src/providers/user.providers';
import { UserService } from './user.service';
@Module({
  imports: [DatabaseModule],
  providers: [UserService, ...UserProviders],
  exports: [UserService],
})
export class UserServiceModule {}
