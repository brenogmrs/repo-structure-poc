import { PartialType } from '@nestjs/mapped-types';
import { PartialType as PartialTypeSwagger } from '@nestjs/swagger';
import {
  CreateUserDto,
  CreateUserDoc,
} from '../../createUser/dtos/createUser.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}

export class UpdateUserDoc extends PartialTypeSwagger(CreateUserDoc) {}
