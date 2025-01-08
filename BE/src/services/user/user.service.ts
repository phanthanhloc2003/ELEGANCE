import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  Logger,
} from '@nestjs/common';
import { RegisterUserBodyDTO } from 'src/dtos/auth/create-user.dto';
import { User, UserNoPassword } from 'src/entitys/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}
  async create(param: RegisterUserBodyDTO): Promise<UserNoPassword> {
    try {
      const { phone, fullName, password: plainPassword } = param;
      const ischeckphone = await this.findOneByPhone(phone);
      if (ischeckphone) {
        throw new HttpException(
          'Phone number already exists',
          HttpStatus.BAD_REQUEST,
        );
      }
      const hashedPassword = await bcrypt.hash(plainPassword, 10);
      const user = this.userRepository.create({
        phone: phone,
        fullName: fullName,
        password: hashedPassword,
      });
      const newUser = await this.userRepository.save(user);
      const { password, role, ...userNopassword } = newUser;
      console.log(password, role);
      return userNopassword;
    } catch (error) {
      this.logger.error('Error creating user', error.stack);
      throw error;
    }
  }

  async findOneByPhone(phone: string): Promise<User | null> {
    try {
      return await this.userRepository.findOne({
        where: { phone: phone },
      });
    } catch (error) {
      this.logger.error('Error finding user by phone', error.stack);
      throw error;
    }
  }
}
