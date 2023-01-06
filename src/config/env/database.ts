import * as dotenv from 'dotenv';

dotenv.config();

export default () => ({
  name: 'default',
  type: 'sqlite',
  database: ':memory:',
  migrationsRun: true,
  synchronize: true,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  autoLoadEntities: true,
});
