import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
  Default,
} from 'sequelize-typescript';
import { User } from 'src/users/user.model';

export type OrderCreationAttributes = {
  userId: number;
  title: string;
  description?: string;
  status?: 'pending' | 'in_progress' | 'done' | 'canceled';
};

@Table({ tableName: 'orders', timestamps: true })
export class Order extends Model<Order, OrderCreationAttributes> {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare userId: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare title: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare phone: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  declare description: string;

  @Default('pending')
  @Column(DataType.ENUM('new', 'pending', 'in_progress', 'done', 'canceled'))
  declare status: 'new' | 'pending' | 'in_progress' | 'done' | 'canceled';

  @BelongsTo(() => User)
  declare user: User;
}
