import { User } from '@shared/entities/user.entity';
import { UserRepository } from '@shared/repositories/user.repository';
import { UpdateUserDto } from './dtos/updateUser.dto';
export declare class UpdateUserService {
    private repository;
    constructor(repository: UserRepository);
    execute(id: string, data: UpdateUserDto): Promise<User>;
}
