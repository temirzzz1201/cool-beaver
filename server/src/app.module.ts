import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { sequelizeConfig } from './config/sequelize.config';
import { ArticlesModule } from './articles/articles.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    SequelizeModule.forRoot(sequelizeConfig),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ArticlesModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
