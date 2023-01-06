import { User } from 'shared/entities/user.entity';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { UpdateUserService } from '../services/update-user.service';
export declare class UpdateUserController {
    private readonly service;
    constructor(service: UpdateUserService);
    index(id: string, data: UpdateUserDto): Promise<User>;
}
