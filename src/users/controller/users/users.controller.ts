import { Controller, Get } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('message')
  hello() {
    return this.userService.helloUsers();
  }
}
