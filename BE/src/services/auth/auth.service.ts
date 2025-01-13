import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { UserNoPassword } from 'src/types/user.type';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class Authservices {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async validateUser(username: string, pass: string): Promise<UserNoPassword> {
    try {
      const user = await this.userService.findOneByPhone(username);
      if (user && bcrypt.compareSync(pass, user?.password)) {
        const result: UserNoPassword = { ...user };
        delete result.password;
        delete result.role;
        return result;
      }
      throw new HttpException(
        'Phone number or password is incorrect',
        HttpStatus.BAD_REQUEST,
      );
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async login(user: UserNoPassword) {
    const payload = {
      id: user.id,
      fullName: user.fullName,
      phone: user.phone,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
    return {
      token: this.jwtService.sign(payload),
      user,
    };
  }
}
