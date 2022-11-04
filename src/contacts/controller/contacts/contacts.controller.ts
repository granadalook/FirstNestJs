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
import { CreateContacDTO } from 'src/contacts/dto/contac.dto';
import { ContactsService } from 'src/contacts/services/contacts/contacts.service';

@Controller('contacts')
export class ContactsController {
  constructor(private contactsServoce: ContactsService) {}

  @Get('message')
  hello(): string {
    return this.contactsServoce.helloContact();
  }
  @Get()
  getAllUsers() {
    return this.contactsServoce.getAllContact();
  }
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.contactsServoce.getContactById(id);
  }
  @Post()
  createUser(@Body() body: CreateContacDTO) {
    return this.contactsServoce.createContact(body);
  }
  @Put(':id')
  updateuser(@Body() body: CreateContacDTO, @Param('id') id: string) {
    return this.contactsServoce.updateContact(id, body);
  }
  @Patch(':id')
  updateUser(@Body() body: CreateContacDTO, @Param('id') id: string) {
    return this.contactsServoce.updatecantacPach(id, body);
  }
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.contactsServoce.deletecantac(id);
  }
}
