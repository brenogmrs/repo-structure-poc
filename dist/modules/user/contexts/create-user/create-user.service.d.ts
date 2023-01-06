import { Repository } from 'typeorm';
import { User } from 'shared/entities/user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
export declare class CreateUserService {
    private repository;
    constructor(repository: Repository<User>);
    execute(data: CreateUserDto): Promise<User>;
}
