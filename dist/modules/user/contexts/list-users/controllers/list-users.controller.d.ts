import { User } from 'shared/entities/user.entity';
import { ListUsersDto } from '../dtos/list-users.dto';
import { ListUsersService } from '../services/list-users.service';
export declare class ListUsersController {
    private readonly service;
    constructor(service: ListUsersService);
    index(query: ListUsersDto): Promise<User[]>;
}
