import * as dotenv from 'dotenv';
import { join } from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenv.config();

const info = {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME,
};

export const config: DataSourceOptions = {
  type: 'postgres',
  host: info.host,
  port: +info.port,
  username: info.username,
  password: info.password,
  database: info.database,
  entities: [join(__dirname, '../../shared/entities/*.entity.{js,ts}')],
  migrations: [join(__dirname, '../../infra/database/migrations/*.ts')],
  migrationsTableName: 'migrations_typeorm',
  synchronize: false,
};

export const dataSource = new DataSource(config);
