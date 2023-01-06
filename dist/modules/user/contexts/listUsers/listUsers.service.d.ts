import { User } from '@shared/entities/user.entity';
import { UserRepository } from '@shared/repositories/user.repository';
export declare class ListUsersService {
    private repository;
    constructor(repository: UserRepository);
    execute(query: any): Promise<User[]>;
}
