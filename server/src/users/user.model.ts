import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  Default,
} from 'sequelize-typescript';

@Table({ tableName: 'users', timestamps: false })
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number;

  @Column({
    allowNull: false,
  })
  declare name: string;

  @Column({ unique: true, allowNull: false })
  declare email: string;

  @Column({ allowNull: false })
  declare password: string;

  @Default('user')
  @Column(DataType.ENUM('user', 'admin'))
  declare role: 'user' | 'admin';

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  declare creationDate: Date;
}
