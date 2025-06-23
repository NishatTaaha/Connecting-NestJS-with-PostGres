import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'taaha@12',
      database: 'nestjs_db',
      entities: [User],
      synchronize: true, // Auto-create table on start (Don't use in production)
    }),
    UserModule,
  ],
})
export class AppModule {}
