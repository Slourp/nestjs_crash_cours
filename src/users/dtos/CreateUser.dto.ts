import { IsEmail, IsNotEmpty } from 'class-validator';

export default class CreateUserDto {
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  age: number;
}
