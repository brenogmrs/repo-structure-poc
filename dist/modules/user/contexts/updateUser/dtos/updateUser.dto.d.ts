import { CreateUserDto, CreateUserDoc } from '../../createUser/dtos/createUser.dto';
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
}
declare const UpdateUserDoc_base: import("@nestjs/common").Type<Partial<CreateUserDoc>>;
export declare class UpdateUserDoc extends UpdateUserDoc_base {
}
export {};
