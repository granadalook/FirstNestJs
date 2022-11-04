import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactsService {
  helloContact() {
    return 'Hola desde el servicio de Contacts';
  }
}
