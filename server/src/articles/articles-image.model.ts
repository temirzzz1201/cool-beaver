import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';
import { Article } from './article.model';

@Table({ tableName: 'article_images' })
export class ArticleImage extends Model<ArticleImage> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  declare id: number;

  @ForeignKey(() => Article)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare articleId: number;

  @BelongsTo(() => Article)
  declare article: Article;

  @Column({ type: DataType.STRING, allowNull: false })
  declare path: string;
}
