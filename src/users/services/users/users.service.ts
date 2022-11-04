import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from 'src/users/dto/users.dto';

@Injectable()
export class UsersService {
  usuarios = [
    { id: '1', name: 'juan', apellido: 'granada', email: 'juan@gmail.com' },
    { id: '2', name: 'carlos', apellido: 'palacio', email: 'carlos@gmail.com' },
    { id: '3', name: 'pedro', apellido: 'guerrero', email: 'pedro@gmail.com' },
    { id: '4', name: 'camilo', apellido: 'acevedo', email: 'camilo@gmail.com' },
    { id: '5', name: 'luis', apellido: 'ruiz', email: 'luis@gmail.com' },
    { id: '6', name: 'lucas', apellido: 'moncada', email: 'lucas@gmail.com' },
  ];
  helloUsers(): string {
    return 'Hola desde el servicio de  Users';
  }
  getAllUser() {
    return this.usuarios;
  }
  getUserById(id: string) {
    return this.usuarios.find((usuario) => usuario.id === id);
  }
  createUser(newUsuario: CreateUserDTO) {
    this.usuarios.push(newUsuario);
    return newUsuario;
  }
  updateUser(id: string, body: CreateUserDTO) {
    const user = this.getUserById(id);
    user.apellido = body.apellido;
    (user.email = body.email), (user.id = body.id), (user.name = body.name);
    return this.createUser(user);
  }
  updateUserPach(id: string, body: CreateUserDTO) {
    const user = this.getUserById(id);
    user.apellido = body.apellido;
    (user.email = body.email), (user.id = body.id), (user.name = body.name);
    return this.createUser(user);
  }
  deleteUser(id: string) {
    const user = this.usuarios.findIndex((usuario) => usuario.id === id);
    const eliminado = this.usuarios.splice(user, 1);
    return { message: `USUARIO ELIMINADO ${id} `, eliminado };
  }
}
