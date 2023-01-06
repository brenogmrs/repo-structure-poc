import { User } from '@shared/entities/user.entity';
import { UpdateUserDto } from './dtos/updateUser.dto';
import { UpdateUserService } from './updateUser.service';
export declare class UpdateUserController {
    private readonly service;
    constructor(service: UpdateUserService);
    index(id: string, data: UpdateUserDto): Promise<User>;
}
