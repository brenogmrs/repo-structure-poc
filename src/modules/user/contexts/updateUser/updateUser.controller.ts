import { Body, Controller, HttpCode, Param, Patch } from '@nestjs/common';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { User } from '@shared/entities/user.entity';
import { UpdateUserDoc, UpdateUserDto } from './dtos/updateUser.dto';
import { UpdateUserService } from './updateUser.service';

@Controller({ path: 'users' })
export class UpdateUserController {
  constructor(private readonly service: UpdateUserService) {}

  @ApiBody({ type: UpdateUserDoc })
  @ApiResponse({ type: User })
  @HttpCode(201)
  @Patch(':id')
  async index(
    @Param('id') id: string,
    @Body() data: UpdateUserDto,
  ): Promise<User> {
    return this.service.execute(id, data);
  }
}
