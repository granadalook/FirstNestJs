import { PartialType } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsUUID, IsEmail } from 'class-validator';
/* eslint-disable prettier/prettier */
export class CreateUserDTO {
  @IsUUID()
  readonly id: string;
  @IsString({ message: 'EL CAMPO name DEBE SER UN STRING ' })
  @IsNotEmpty({ message: 'EL CAMPO name NO DEBE ESTAR  VACIO ' })
  readonly name: string;
  @IsString({ message: 'EL CAMPO lastName DEBE SER UN STRING ' })
  @IsNotEmpty({ message: 'EL CAMPO lastName NO DEBE ESTAR  VACIO ' })
  readonly lastName: string;
  @IsEmail()
  @IsNotEmpty({ message: 'EL CAMPO email NO DEBE ESTAR  VACIO ' })
  readonly email: string;
}
export class updateUser extends PartialType(CreateUserDTO) {}
