import { Injectable } from '@nestjs/common';
import { CreateContacDTO } from 'src/contacts/dto/contac.dto';

@Injectable()
export class ContactsService {
  contactos = [
    {
      id: '1',
      usuarioId: 'juan',
      nombre: 'granada',
      apellidos: 'juan@gmail.com',
      teléfono: '31147854785',
      email: 'carlos@gmail.com',
    },
    {
      id: '2',
      usuarioId: 'juan',
      nombre: 'granada',
      apellidos: 'juan@gmail.com',
      teléfono: '31147854785',
      email: 'carlos@gmail.com',
    },
    {
      id: '3',
      usuarioId: 'juan',
      nombre: 'granada',
      apellidos: 'juan@gmail.com',
      teléfono: '31147854785',
      email: 'carlos@gmail.com',
    },
  ];
  helloContact(): string {
    return 'Hola desde el servicio de Contacts';
  }
  getAllContact() {
    return this.contactos;
  }
  getContactById(id: string) {
    return this.contactos.find((usuario) => usuario.id === id);
  }
  createContact(newUsuario: CreateContacDTO) {
    this.contactos.push(newUsuario);
    return newUsuario;
  }
  updateContact(id: string, body: CreateContacDTO) {
    const cantac = this.getContactById(id);
    cantac.id = body.id;
    cantac.email = body.email;
    (cantac.nombre = body.nombre), (cantac.apellidos = body.apellidos);
    cantac.teléfono = body.teléfono;
    cantac.usuarioId = body.usuarioId;

    return this.createContact(cantac);
  }
  updatecantacPach(id: string, body: CreateContacDTO) {
    const cantac = this.getContactById(id);
    cantac.id = body.id;
    cantac.email = body.email;
    (cantac.nombre = body.nombre), (cantac.apellidos = body.apellidos);
    cantac.teléfono = body.teléfono;
    cantac.usuarioId = body.usuarioId;
    return this.createContact(cantac);
  }
  deletecantac(id: string) {
    const cantac = this.contactos.findIndex((usuario) => usuario.id === id);
    const eliminado = this.contactos.splice(cantac, 1);
    return { message: `USUARIO ELIMINADO ${id} `, eliminado };
  }
}
