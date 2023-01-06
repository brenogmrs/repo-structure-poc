import {
  HttpStatus,
  INestApplication,
  Logger,
  ValidationPipe,
} from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { UserRepository } from '@shared/repositories/user.repository';
import * as request from 'supertest';
import { v4 as uuid } from 'uuid';
import { CreateUserController } from '../createUser.controller';
import { CreateUserService } from '../createUser.service';
import { CreateUserDto } from '../dtos/createUser.dto';

describe('create user controller context ', () => {
  let app: INestApplication;
  let createUserService: CreateUserService;

  const logger = new Logger('Create user controller suite');

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CreateUserController],
      providers: [
        CreateUserService,
        {
          provide: getRepositoryToken(UserRepository),
          useValue: {},
        },
      ],
    })
      .setLogger(logger)
      .compile();
    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());

    await app.init();
    createUserService = moduleRef.get<CreateUserService>(CreateUserService);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    app.close();
  });

  it('should be defined', async () => {
    expect(app).toBeDefined();
    expect(createUserService).toBeDefined();
  });

  describe('POST - /api/v1/users', () => {
    it('should create a user', async () => {
      const id = uuid();
      const userData: CreateUserDto = {
        username: 'username',
        email: 'email@teste.com',
        password: 'password',
      };

      const expectedResponse: any = {
        id,
        ...userData,
      };

      const createUserServiceSpy = jest
        .spyOn(createUserService, 'execute')
        .mockResolvedValue(expectedResponse);

      const response = await request(app.getHttpServer())
        .post(`/users`)
        .send(userData)
        .expect(HttpStatus.CREATED);

      expect(response.body).toEqual(expectedResponse);
      expect(createUserServiceSpy).toHaveBeenNthCalledWith(1, userData);
    });

    it('should not create a user', async () => {
      const createUserServiceSpy = jest.spyOn(createUserService, 'execute');

      const response = await request(app.getHttpServer())
        .post(`/users`)
        .send({})
        .expect(HttpStatus.BAD_REQUEST);

      expect(response.body.message).toEqual(
        expect.arrayContaining([
          'username must be a string',
          'username should not be empty',
          'username must be a lowercase string',
          'email must be a lowercase string',
          'email should not be empty',
          'email must be an email',
        ]),
      );

      expect(createUserServiceSpy).not.toBeCalled();
    });
  });
});
