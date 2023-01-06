import { User } from '@shared/entities/user.entity';
export declare class UserBuilder {
    private model;
    constructor();
    withUsername(username: string): UserBuilder;
    withEmail(email: string): UserBuilder;
    withPassword(password: string): UserBuilder;
    withCreatedAt(created_at: Date): UserBuilder;
    withUpdatedAt(updated_at: Date): UserBuilder;
    withDeletedAt(deleted_at: Date): UserBuilder;
    build(): User;
}
