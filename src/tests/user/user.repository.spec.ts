import { Logger } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';

import { databaseConfigQA } from '@config/env/databaseConfigQA';

import { User } from '@shared/entities/user.entity';
import { UserRepository } from '@shared/repositories/user.repository';
import { UserBuilder } from './builder/user.model.builder';

const userData = new UserBuilder()
  .withUsername('bilbobaggins')
  .withEmail('bilbo@fellowship.com')
  .withPassword('123123')
  .build();

describe('user repository context', () => {
  let repository: UserRepository;

  beforeAll(async () => {
    const logger = new Logger('User Repository Suite');

    const databaseOptions = databaseConfigQA();

    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forFeature([User]),
        TypeOrmModule.forRoot({
          ...databaseOptions,
          entities: [User],
        }),
      ],
      providers: [UserRepository],
    })
      .setLogger(logger)
      .compile();

    repository = await moduleRef.resolve<UserRepository>(
      getRepositoryToken(UserRepository),
    );
  });

  const createSut = async (sutData: Partial<User>): Promise<User> => {
    const data = {
      ...userData,
      ...sutData,
    };

    return repository.createAndSave(data);
  };

  afterEach(async () => {
    await repository.clear();
    jest.resetAllMocks();
  });

  afterAll(async () => {
    await repository.manager.connection.destroy();
  });

  it('repository should be defined', async () => {
    expect(repository).toBeDefined();
  });

  it('should create a user', async () => {
    const user = await repository.createAndSave(userData);

    const result = await repository.findOneBy({ id: user.id });

    expect(result.id).toEqual(user.id);
  });

  it('should return a list of users', async () => {
    const user1 = await createSut(userData);
    const user2 = await createSut(userData);
    const expectedResponse = [user1, user2];

    const query = {};
    const result = await repository.findAll(query);

    expect(result.length).toBe(expectedResponse.length);
  });

  it('should return a user by its username', async () => {
    const user = await createSut(userData);

    const result = await repository.findByUsername(user.username);

    expect(user).toEqual(result);
  });

  it('should not return a user by its username', async () => {
    const user = await createSut(userData);

    const result = await repository.findByUsername('Sam');

    expect(user).not.toEqual(result);
  });

  it('should find a user by its id', async () => {
    const user = await createSut(userData);

    const result = await repository.findById(user.id);

    expect(user).toEqual(result);
  });

  it('should not find a user by its id', async () => {
    const user = await createSut(userData);

    const result = await repository.findById('WRONG_ID');

    expect(user).not.toEqual(result);
  });
});
