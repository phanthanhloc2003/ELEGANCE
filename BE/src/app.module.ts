import { Module } from '@nestjs/common';
import { UserControllerModule } from './controllers/user/user.controller.module';
import { AuthControllerModule } from './controllers/auth/auth.controller.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserControllerModule,
    AuthControllerModule,
  ],
})
export class AppModule {}
