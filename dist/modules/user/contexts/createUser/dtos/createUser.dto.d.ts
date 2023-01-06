import { User } from '@shared/entities/user.entity';
declare const CreateUserDto_base: import("@nestjs/mapped-types").MappedType<Omit<User, "id" | "createdAt" | "updatedAt" | "deletedAt">>;
export declare class CreateUserDto extends CreateUserDto_base {
}
declare const CreateUserDoc_base: import("@nestjs/common").Type<Omit<User, "id" | "createdAt" | "updatedAt" | "deletedAt">>;
export declare class CreateUserDoc extends CreateUserDoc_base {
}
export {};
