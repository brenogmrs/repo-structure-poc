import { Controller, Get, HttpCode, Query } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { User } from '@shared/entities/user.entity';
import { ListUsersDto } from './dtos/listUsers.dto';
import { ListUsersService } from './listUsers.service';

@Controller({ path: 'users' })
export class ListUsersController {
  constructor(private readonly service: ListUsersService) {}

  @ApiResponse({ type: [User] })
  @HttpCode(200)
  @Get()
  async index(@Query() query: ListUsersDto): Promise<User[]> {
    return this.service.execute(query);
  }
}
