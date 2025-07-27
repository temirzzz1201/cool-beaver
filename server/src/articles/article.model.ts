import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'articles', timestamps: true })
export class Article extends Model<Article> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  content: string;
}
