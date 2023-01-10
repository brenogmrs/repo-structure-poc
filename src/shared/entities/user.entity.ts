import { Type } from 'class-transformer';
import { IsEmail, IsLowercase, IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity } from 'typeorm';

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from './base.entity';

@Entity('users')
export class User extends BaseEntity {
  @ApiPropertyOptional({ type: String })
  @IsLowercase()
  @IsNotEmpty()
  @IsString()
  @Column({ type: 'varchar', name: 'username', nullable: true })
  username: string;

  @ApiProperty({ type: String })
  @IsEmail()
  @IsNotEmpty()
  @IsLowercase()
  @Type(() => String)
  @Column({ type: 'varchar', name: 'email' })
  email: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @Column({ type: 'varchar', name: 'password' })
  password: string;
}
