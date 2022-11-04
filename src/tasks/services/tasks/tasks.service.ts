import { Injectable } from '@nestjs/common';
import { CreateTasksDTO } from 'src/tasks/dto/tasks.dto';

@Injectable()
export class TasksService {
  tasks = [
    { id: '1', usuarioId: '12', tarea: 'granada' },
    { id: '2', usuarioId: '13', tarea: 'palacio' },
    { id: '3', usuarioId: '14', tarea: 'acevedo' },
    { id: '4', usuarioId: '15', tarea: 'acevedo' },
    { id: '5', usuarioId: '16', tarea: 'ruiz' },
    { id: '6', usuarioId: '17', tarea: 'moncada' },
  ];
  helloTasks(): string {
    return 'Hola desde el servicio de Tasks';
  }

  getAllTasks() {
    return this.tasks;
  }
  getTasksById(id: string) {
    return this.tasks.find((usuario) => usuario.id === id);
  }
  createTasks(newUsuario: CreateTasksDTO) {
    this.tasks.push(newUsuario);
    return newUsuario;
  }
  updateTasks(id: string, body: CreateTasksDTO) {
    const task = this.getTasksById(id);
    (task.id = body.id),
      (task.tarea = body.tarea),
      (task.usuarioId = body.usuarioId),
      this.createTasks(task);
    return task;
  }
  updateTasksPach(id: string, body: CreateTasksDTO) {
    const task = this.getTasksById(id);
    task.tarea = body.tarea;
    (task.usuarioId = body.usuarioId),
      (task.id = body.id),
      this.createTasks(task);
    return task;
  }
  deleteTasks(id: string) {
    const task = this.tasks.findIndex((usuario) => usuario.id === id);
    const eliminado = this.tasks.splice(task, 1);
    return { message: `USUARIO ELIMINADO ${id} `, eliminado };
  }
}
