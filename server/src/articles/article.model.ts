import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  HasMany,
} from 'sequelize-typescript';
import { ArticleImage } from './articles-image.model';

@Table({ tableName: 'articles' })
export class Article extends Model<Article> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  declare id: number;

  @Column({ type: DataType.STRING })
  declare title: string;

  @Column({ type: DataType.TEXT })
  declare content: string;

  @HasMany(() => ArticleImage)
  images: ArticleImage[];
}
