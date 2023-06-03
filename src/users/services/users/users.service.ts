import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/users/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    {
      username: 'ta',
      email: 'david@gmail.com',
    },
    {
      username: 'pa',
      email: 'julie@gmail.com',
    },
  ];

  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return;
  }
  fetchUserById(id: number) {
    return {
      id,
      username: 'pa',
      email: 'julie@gmail.com',
    };
  }
}
