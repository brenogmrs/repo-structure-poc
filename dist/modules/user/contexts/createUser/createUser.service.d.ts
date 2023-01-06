import { User } from '@shared/entities/user.entity';
import { UserRepository } from '@shared/repositories/user.repository';
import { CreateUserDto } from './dtos/createUser.dto';
export declare class CreateUserService {
    private repository;
    constructor(repository: UserRepository);
    execute(data: CreateUserDto): Promise<User>;
}
