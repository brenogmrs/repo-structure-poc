import { User } from 'shared/entities/user.entity';
import { CreateUserService } from './create-user.service';
import { CreateUserDto } from './dtos/create-user.dto';
export declare class CreateUserController {
    private readonly service;
    constructor(service: CreateUserService);
    index(data: CreateUserDto): Promise<User>;
}
