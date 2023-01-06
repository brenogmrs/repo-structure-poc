import { User } from 'shared/entities/user.entity';
import { CreateUserDto } from '../dtos/create-user.dto';
import { CreateUserService } from '../services/create-user.service';
export declare class CreateUserController {
    private readonly service;
    constructor(service: CreateUserService);
    index(data: CreateUserDto): Promise<User>;
}
