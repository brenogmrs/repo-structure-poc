import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'shared/entities/user.entity';
import { UserRepository } from '../../shared/repositories/user.repository';
import { CreateUserController } from './contexts/createUser/createUser.controller';
import { CreateUserService } from './contexts/createUser/createUser.service';
import { ListUsersController } from './contexts/listUsers/listUsers.controller';
import { ListUsersService } from './contexts/listUsers/listUsers.service';
import { UpdateUserController } from './contexts/updateUser/updateUser.controller';
import { UpdateUserService } from './contexts/updateUser/updateUser.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [
    CreateUserController,
    ListUsersController,
    UpdateUserController,
  ],
  providers: [
    CreateUserService,
    ListUsersService,
    UpdateUserService,
    UserRepository,
  ],
  exports: [UserRepository],
})
export class UserModule {}
