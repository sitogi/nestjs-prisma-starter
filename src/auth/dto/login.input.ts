import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class LoginInput {
  @ApiProperty({
    description: 'email',
    default: 'test@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'password',
    minimum: 8,
    default: '12345678',
  })
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
