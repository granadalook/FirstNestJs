import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTasksDTO } from 'src/tasks/dto/tasks.dto';
import { TasksService } from 'src/tasks/services/tasks/tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Get('message')
  hello(): string {
    return this.tasksService.helloTasks();
  }
  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }
  @Get(':id')
  getTasksById(@Param('id') id: string) {
    return this.tasksService.getTasksById(id);
  }
  @Post()
  createTasks(@Body() body: CreateTasksDTO) {
    return this.tasksService.createTasks(body);
  }
  @Put(':id')
  updateTasks(@Body() body: CreateTasksDTO, @Param('id') id: string) {
    return this.tasksService.updateTasks(id, body);
  }
  @Patch(':id')
  updatetasks(@Body() body: CreateTasksDTO, @Param('id') id: string) {
    return this.tasksService.updateTasksPach(id, body);
  }
  @Delete(':id')
  deleteTasks(@Param('id') id: string) {
    return this.tasksService.deleteTasks(id);
  }
}
