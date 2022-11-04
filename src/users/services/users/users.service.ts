import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  helloUsers() {
    return 'Hola desde el servicio de  Users';
  }
}
