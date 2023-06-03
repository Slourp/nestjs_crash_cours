import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import CreateUserDto from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform(value: CreateUserDto, _metadata: ArgumentMetadata) {
    const parseAgeToInt = parseInt(value.age.toString());
    if (isNaN(parseAgeToInt)) {
      console.log(`${value.age} is not a number`);
      throw new HttpException(
        'Invalide Data type for property age. Exepted Number',
        HttpStatus.BAD_REQUEST,
      );
    }
    console.log(`${value.age} is a number. Returning...`);

    return { ...value, age: parseAgeToInt };
  }
}
