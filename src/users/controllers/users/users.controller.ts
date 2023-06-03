import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { error } from 'console';
import CreateUserDto from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userservice: UsersService) {}

  @Get()
  getUsers() {
    this.userservice.fetchUsers();
  }

  @Get('users/posts')
  getUsersPosts() {
    return [
      {
        id: 123,
        title: 'poppi',
      },
      {
        id: 145,
        title: 'popo',
      },
    ];
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUserDto) {
    this.userservice.createUser(userData);
    console.log(userData);
    return {};
  }

  @Get(':id/:postId')
  getUserById(
    @Param('id', ParseIntPipe) id: number,
    @Param('postId') postId: string,
  ) {
    console.log(id, postId);
    const user = this.userservice.fetchUserById(id);

    if (!user)
      throw new HttpException('User Not Found', HttpStatus.BAD_REQUEST);
    return this.userservice.fetchUserById(id);
  }

  @Get('filter')
  filterUser(@Query('sortDesc', ParseBoolPipe) sortDesc: string) {
    console.log(typeof sortDesc);
    [
      {
        user: 'ta',
        name: 'david',
      },
      {
        user: 'pa',
        name: 'julie',
      },
    ];
  }
}
