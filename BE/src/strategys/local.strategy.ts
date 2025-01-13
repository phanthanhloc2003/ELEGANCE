import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Authservices } from 'src/services/auth/auth.service';
import { UserNoPassword } from 'src/types/user.type';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authservices: Authservices) {
    super({ usernameField: 'phone' });
  }
  async validate(phone: string, password: string): Promise<UserNoPassword> {
    const user: UserNoPassword = await this.authservices.validateUser(
      phone,
      password,
    );
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
