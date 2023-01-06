import { Logger } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { UserRepository } from '@shared/repositories/user.repository';
import { UserBuilder } from '@tests/user/builder/user.model.builder';

import { CreateUserService } from '../createUser.service';
import { v4 as uuid } from 'uuid';

describe('create user service', () => {
  let createUserService: CreateUserService;
  let repository: UserRepository;

  const logger = new Logger('Create user service suite');

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateUserService,
        {
          provide: UserRepository,
          useValue: {
            findByUsername: jest.fn(),
            createAndSave: jest.fn(),
          },
        },
      ],
    })
      .setLogger(logger)
      .compile();

    createUserService = module.get<CreateUserService>(CreateUserService);
    repository = module.get<UserRepository>(UserRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('instances should be defined', async () => {
    expect(repository).toBeDefined();
    expect(createUserService).toBeDefined();
  });

  it('should create a user', async () => {
    const userId = uuid();
    const userData = new UserBuilder()
      .withUsername('bilbobaggins')
      .withEmail('bilbo@fellowship.com')
      .withPassword('123123')
      .build();

    const expectedResponse = {
      ...userData,
      id: userId,
    };

    const findByUsernameSpy = jest
      .spyOn(repository, 'findByUsername')
      .mockResolvedValue(undefined);

    const createAndSaveSpy = jest
      .spyOn(repository, 'createAndSave')
      .mockResolvedValue(expectedResponse);

    const res = await createUserService.execute(userData);

    expect(res).toEqual(expectedResponse);
    expect(findByUsernameSpy).toHaveBeenNthCalledWith(1, userData.username);
    expect(createAndSaveSpy).toHaveBeenNthCalledWith(1, userData);
  });

  it('ConflictException - should not be able to create a user', async () => {
    expect.hasAssertions();

    const userData = new UserBuilder()
      .withUsername('bilbobaggins')
      .withEmail('bilbo@fellowship.com')
      .withPassword('123123')
      .build();

    const findByUsernameSpy = jest
      .spyOn(repository, 'findByUsername')
      .mockResolvedValue('found user' as any);

    const createAndSaveSpy = jest.spyOn(repository, 'createAndSave');

    try {
      await createUserService.execute(userData);
    } catch (error) {
      expect(error.message).toBe('User already exists');
      expect(error.status).toBe(409);
      expect(findByUsernameSpy).toHaveBeenNthCalledWith(1, userData.username);
      expect(createAndSaveSpy).not.toBeCalled();
    }
  });
});
