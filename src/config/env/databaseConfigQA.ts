import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { join } from 'path';

dotenv.config();

export const databaseConfigQA = (): TypeOrmModuleOptions => ({
  type: 'sqlite',
  database: ':memory:',
  migrationsRun: true,
  synchronize: true,
  entities: [join(__dirname, '../../shared/entities/*.entity.{ts,js}')],
});
