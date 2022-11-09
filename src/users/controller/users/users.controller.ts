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
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get('message')
  hello(): string {
    return this.userService.helloUsers();
  }
  @UseGuards(tokenGuard)
  @Get()
  @UseInterceptors(ReturnInterceptor)
  getAllUsers() {
    return this.userService.getAllUser();
  }
  @UseGuards(tokenGuard)
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }
  @UseGuards(tokenGuard)
  @Post()
  createUser(@Body() body: CreateUserDTO) {
    return this.userService.createUser(body);
  }
  @UseGuards(tokenGuard)
  @Put(':id')
  updateuser(@Body() body: updateUser, @Param('id') id: string) {
    return this.userService.updateUser(id, body);
  }
  @UseGuards(tokenGuard)
  @Patch(':id')
  updateUser(@Body() body: updateUser, @Param('id') id: string) {
    return this.userService.updateUserPach(id, body);
  }
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
