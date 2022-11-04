import { Controller, Get } from '@nestjs/common';
import { ContactsService } from 'src/contacts/services/contacts/contacts.service';

@Controller('contacts')
export class ContactsController {
  constructor(private contactsServoce: ContactsService) {}

  @Get('message')
  hello() {
    return this.contactsServoce.helloContact();
  }
}
