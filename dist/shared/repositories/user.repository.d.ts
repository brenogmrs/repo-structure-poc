import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../../modules/user/contexts/createUser/dtos/createUser.dto';
export declare class UserRepository extends Repository<User> {
    private repository;
    constructor(repository: Repository<User>);
    createAndSave(userData: CreateUserDto): Promise<User>;
    findByUsername(username: string): Promise<User>;
    findAll(query: any): Promise<User[]>;
    findById(id: string): Promise<User>;
}
