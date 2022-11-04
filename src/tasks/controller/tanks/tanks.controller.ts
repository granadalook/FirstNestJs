import { Controller, Get } from '@nestjs/common';
import { TasksService } from 'src/tasks/services/tasks/tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Get('message')
  hello() {
    return this.tasksService.helloTasks();
  }
}
