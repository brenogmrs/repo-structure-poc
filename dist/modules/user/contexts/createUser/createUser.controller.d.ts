import { User } from '@shared/entities/user.entity';
import { CreateUserService } from './createUser.service';
import { CreateUserDto } from './dtos/createUser.dto';
export declare class CreateUserController {
    private readonly service;
    constructor(service: CreateUserService);
    index(data: CreateUserDto): Promise<User>;
}
