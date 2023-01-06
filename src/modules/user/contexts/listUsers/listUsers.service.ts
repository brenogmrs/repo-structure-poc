import { Inject } from '@nestjs/common';
import { User } from '@shared/entities/user.entity';
import { UserRepository } from '@shared/repositories/user.repository';

export class ListUsersService {
  constructor(
    @Inject(UserRepository)
    private repository: UserRepository,
  ) {}

  public async execute(query: any): Promise<User[]> {
    return this.repository.findAll(query);
  }
}
