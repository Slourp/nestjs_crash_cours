import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import CreateUserDto from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return [
      {
        user: 'ta',
        name: 'david',
      },
    ];
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
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData);
    return {};
  }

  @Get(':id/:postId')
  getUserById(@Param('id') id: string, @Param('postId') postId: string) {
    console.log(id, postId);
    return {};
  }

  @Get('filter')
  filterUser(@Query('sortBy') sortBy: string) {
    console.log(typeof sortBy);
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
