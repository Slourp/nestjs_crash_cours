import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('')
  getUsers() {
    return [
      {
        user: 'ta',
        name: 'david',
      },
    ];
  }

  @Get('posts')
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
}
