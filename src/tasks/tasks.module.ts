import { Module } from '@nestjs/common';
import { TasksController } from './controller/tanks/tanks.controller';
import { TasksService } from './services/tasks/tasks.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
  exports: [TasksService],
})
export class TasksModule {}
