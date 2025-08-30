import 'dotenv/config';
import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Article } from 'src/articles/article.model';
import { User } from 'src/users/user.model';

export const sequelizeConfig: SequelizeModuleOptions = {
  dialect: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  models: [Article, User],
  autoLoadModels: true,
  synchronize: true,
  logging: console.log,
};
