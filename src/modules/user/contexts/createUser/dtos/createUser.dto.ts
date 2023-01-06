import { User } from '@shared/entities/user.entity';
import { OmitType as OmitTypeSwagger } from '@nestjs/swagger';
import { OmitType } from '@nestjs/mapped-types/dist/omit-type.helper';

export class CreateUserDto extends OmitType(User, [
  'id',
  'createdAt',
  'updatedAt',
  'deletedAt',
]) {}

export class CreateUserDoc extends OmitTypeSwagger(User, [
  'id',
  'createdAt',
  'updatedAt',
  'deletedAt',
]) {}
