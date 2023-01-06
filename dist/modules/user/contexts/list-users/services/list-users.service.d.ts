import { Repository } from 'typeorm';
import { User } from 'shared/entities/user.entity';
export declare class ListUsersService {
    private repository;
    constructor(repository: Repository<User>);
    execute(query: any): Promise<User[]>;
}
