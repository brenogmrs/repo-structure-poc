import { User } from '@shared/entities/user.entity';

export class UserBuilder {
  private model: User;

  constructor() {
    this.model = {} as User;
  }

  public withUsername(username: string): UserBuilder {
    this.model.username = username;
    return this;
  }

  public withEmail(email: string): UserBuilder {
    this.model.email = email;
    return this;
  }

  public withPassword(password: string): UserBuilder {
    this.model.password = password;
    return this;
  }

  public withCreatedAt(created_at: Date): UserBuilder {
    this.model.createdAt = created_at;
    return this;
  }

  public withUpdatedAt(updated_at: Date): UserBuilder {
    this.model.updatedAt = updated_at;
    return this;
  }

  public withDeletedAt(deleted_at: Date): UserBuilder {
    this.model.deletedAt = deleted_at;
    return this;
  }

  public build(): User {
    return this.model;
  }
}
