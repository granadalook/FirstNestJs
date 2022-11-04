import { Module } from '@nestjs/common';
import { UsersController } from '../users/controller/users/users.controller';
import { UsersService } from '../users/services/users/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
