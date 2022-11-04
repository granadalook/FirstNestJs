import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  helloTasks() {
    return 'Hola desde el servicio de Tasks';
  }
}
