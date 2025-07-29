import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  Unique,
} from 'sequelize-typescript';
import { CreationOptional } from 'sequelize';

@Table({ tableName: 'users', timestamps: false })
export class User extends Model<User, Partial<User>> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: CreationOptional<number>;

  @Column(DataType.STRING)
  declare name: string;

  @Unique
  @Column(DataType.STRING)
  declare email: string;

  @Column(DataType.STRING)
  declare password: string;

  @Column({ type: DataType.STRING, defaultValue: 'user' })
  declare role: string;
}
