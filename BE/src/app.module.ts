import { Module } from '@nestjs/common';
import { UserControllerModule } from './controllers/user/user.controller.module';

@Module({
  imports: [UserControllerModule],
})
export class AppModule {}
