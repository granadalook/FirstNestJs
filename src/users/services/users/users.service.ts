import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO, updateUser } from 'src/users/dto/users.dto';

@Injectable()
export class UsersService {
  usuarios = [
    {
      id: '4ebf7bf3-9913-4cd9-84e8-b618c32c8d38',
      name: 'juan',
      lastName: 'granada',
      email: 'juan@gmail.com',
    },
    { id: '2', name: 'carlos', lastName: null, email: 'carlos@gmail.com' },
    { id: '3', name: 'pedro', lastName: 'guerrero', email: 'pedro@gmail.com' },
    { id: '4', name: 'camilo', lastName: 'acevedo', email: 'camilo@gmail.com' },
    { id: '5', name: 'luis', lastName: 'ruiz', email: 'luis@gmail.com' },
    { id: '6', name: 'lucas', lastName: 'moncada', email: 'lucas@gmail.com' },
  ];
  helloUsers(): string {
    return 'Hola desde el servicio de  Users';
  }
  getAllUser() {
    return this.usuarios;
  }
  getUserById(id: string) {
    const usuario = this.usuarios.find((usuario) => usuario.id === id);
    if (!usuario) {
      throw new NotFoundException(`USUARIO DE  ${id} NO EXISTE`);
    }
    return usuario;
  }
  createUser(newUsuario: CreateUserDTO) {
    this.usuarios.push(newUsuario);
    return newUsuario;
  }
  updateUser(id: string, body: updateUser) {
    const user = this.getUserById(id);
    user.lastName = body.lastName;
    (user.email = body.email), (user.id = body.id), (user.name = body.name);
    return this.createUser(user);
  }
  updateUserPach(id: string, body: updateUser) {
    const user = this.getUserById(id);
    user.lastName = body.lastName;
    (user.email = body.email), (user.id = body.id), (user.name = body.name);
    return this.createUser(user);
  }
  deleteUser(id: string) {
    const user = this.usuarios.findIndex((usuario) => usuario.id === id);
    const eliminado = this.usuarios.splice(user, 1);
    return { message: `USUARIO ELIMINADO ${id} `, eliminado };
  }
}
