import { ConflictException, Inject } from '@nestjs/common';
import { User } from '@shared/entities/user.entity';
import { UserRepository } from '@shared/repositories/user.repository';
import { CreateUserDto } from './dtos/createUser.dto';

export class CreateUserService {
  constructor(
    @Inject(UserRepository)
    private repository: UserRepository,
  ) {}

  public async execute(data: CreateUserDto): Promise<User> {
    const { username } = data;

    const foundUser = await this.repository.findByUsername(username);

    if (foundUser) {
      throw new ConflictException('User already exists');
    }

    return this.repository.createAndSave(data);
  }
}
