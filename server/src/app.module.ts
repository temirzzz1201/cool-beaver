import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { sequelizeConfig } from './config/sequelize.config';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [
    SequelizeModule.forRoot(sequelizeConfig),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ArticlesModule,
  ],
})
export class AppModule {}
