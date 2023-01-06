import { User } from '@shared/entities/user.entity';
import { ListUsersDto } from './dtos/listUsers.dto';
import { ListUsersService } from './listUsers.service';
export declare class ListUsersController {
    private readonly service;
    constructor(service: ListUsersService);
    index(query: ListUsersDto): Promise<User[]>;
}
