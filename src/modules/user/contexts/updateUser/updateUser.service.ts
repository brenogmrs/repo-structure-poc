import { ConflictException, Inject, NotFoundException } from '@nestjs/common';

import { User } from '@shared/entities/user.entity';
import { UserRepository } from '@shared/repositories/user.repository';
import { UpdateUserDto } from './dtos/updateUser.dto';

export class UpdateUserService {
  constructor(
    @Inject(UserRepository)
    private repository: UserRepository,
  ) {}

  public async execute(id: string, data: UpdateUserDto): Promise<User> {
    const user = await this.repository.findById(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (data.email) {
      const foundEmail = this.repository.findOneBy({ email: data.email });

      if (foundEmail) {
        throw new ConflictException('Email already registred');
      }
    }

    return this.repository.save({ ...user, ...data });
  }
}
