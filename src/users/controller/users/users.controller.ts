import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { tokenGuard } from 'src/guard/calidation.guard';
import { ReturnInterceptor } from 'src/interceptors/retur.interceptor';
import { CreateUserDTO, updateUser } from 'src/users/dto/users.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
@UseGuards(tokenGuard)
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get('message')
  hello(): string {
    return this.userService.helloUsers();
  }

  @Get()
  @UseInterceptors(ReturnInterceptor)
  getAllUsers() {
    return this.userService.getAllUser();
  }
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }
  @Post()
  createUser(@Body() body: CreateUserDTO) {
    return this.userService.createUser(body);
  }
  @Put(':id')
  updateuser(@Body() body: updateUser, @Param('id') id: string) {
    return this.userService.updateUser(id, body);
  }
  @Patch(':id')
  updateUser(@Body() body: updateUser, @Param('id') id: string) {
    return this.userService.updateUserPach(id, body);
  }
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
