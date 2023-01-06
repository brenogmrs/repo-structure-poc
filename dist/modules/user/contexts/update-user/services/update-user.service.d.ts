import { User } from 'shared/entities/user.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from '../dtos/update-user.dto';
export declare class UpdateUserService {
    private repository;
    constructor(repository: Repository<User>);
    execute(id: string, data: UpdateUserDto): Promise<User>;
}
