import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
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
}
