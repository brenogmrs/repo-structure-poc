import { User } from 'shared/entities/user.entity';
declare const ListUsersDto_base: import("@nestjs/mapped-types").MappedType<Partial<Omit<User, "id" | "password">>>;
export declare class ListUsersDto extends ListUsersDto_base {
}
export {};
