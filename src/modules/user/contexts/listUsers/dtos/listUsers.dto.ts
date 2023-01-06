import { PartialType, OmitType } from '@nestjs/mapped-types';
import { User } from 'shared/entities/user.entity';

export class ListUsersDto extends PartialType(
  OmitType(User, ['id', 'password']),
) {}
