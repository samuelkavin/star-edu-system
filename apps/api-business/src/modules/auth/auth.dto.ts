import {ApiProperty} from '@nestjs/swagger';
import {IsEmail, IsNotEmpty, IsString, MaxLength, MinLength} from 'class-validator';

export class AuthCredentialDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @ApiProperty()
  username: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(20)
  @ApiProperty()
  password: string;
}
