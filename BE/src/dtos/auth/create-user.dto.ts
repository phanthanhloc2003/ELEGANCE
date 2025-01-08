import {
  IsString,
  MinLength,
  MaxLength,
  IsNotEmpty,
  Matches,
  IsPhoneNumber,
} from 'class-validator';

export class RegisterUserBodyDTO {
  @IsString()
  @IsNotEmpty({ message: 'Full name is required' })
  @MinLength(3, { message: 'Full name must be at least 3 characters long' })
  @MaxLength(50, { message: 'Full name cannot exceed 50 characters' })
  fullName: string;

  @IsPhoneNumber('VN', {
    message: 'Phone number must be a valid Vietnamese phone number',
  })
  @IsNotEmpty({ message: 'Phone number is required' })
  phone: string;

  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @MaxLength(20, { message: 'Password cannot exceed 20 characters' })
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?\/\\|-]).{8,20}$/,
    {
      message:
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    },
  )
  password: string;
}
