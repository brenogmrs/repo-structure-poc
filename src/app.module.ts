import { config } from '@config/env/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import { HealthModule } from './modules/health/health.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      dataSourceFactory: async () => {
        const dataSource = await new DataSource(config).initialize();
        return dataSource;
      },
      useFactory: () => ({
        ...config,
      }),
    }),
    HealthModule,
    UserModule,
  ],
})
export class AppModule {}
