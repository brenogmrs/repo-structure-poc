import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { User } from '@shared/entities/user.entity';
import { CreateUserService } from './createUser.service';
import { CreateUserDoc, CreateUserDto } from './dtos/createUser.dto';

@Controller('users')
export class CreateUserController {
  constructor(private readonly service: CreateUserService) {}

  @ApiBody({ type: CreateUserDoc })
  @ApiResponse({ type: User })
  @HttpCode(201)
  @Post()
  async index(@Body() data: CreateUserDto): Promise<User> {
    return this.service.execute(data);
  }
}
