import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../../modules/user/contexts/createUser/dtos/createUser.dto';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {
    const { target, manager, queryRunner } = repository;

    super(target, manager, queryRunner);
  }

  public async createAndSave(userData: CreateUserDto): Promise<User> {
    const user = this.repository.create(userData);

    return this.repository.save(user);
  }

  public async findByUsername(username: string) {
    return this.repository.findOneBy({ username });
  }

  public async findAll(query: any) {
    return this.repository.find();
  }

  public async findById(id: string) {
    return this.repository.findOneBy({ id });
  }
}
