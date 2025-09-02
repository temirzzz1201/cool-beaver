import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Order, OrderCreationAttributes } from './order.model';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order) private readonly orderModel: typeof Order) {}

  async create(userId: number, dto: CreateOrderDto): Promise<Order> {
    const data: OrderCreationAttributes = {
      ...dto,
      userId,
      status: 'pending',
    };
    return await this.orderModel.create(data);
  }

  async findAll(): Promise<Order[]> {
    return this.orderModel.findAll({ include: { all: true } });
  }

  async findMy(userId: number): Promise<Order[]> {
    return this.orderModel.findAll({
      where: { userId },
      order: [['createdAt', 'DESC']],
    });
  }

  async findOne(id: number, userId: number): Promise<Order> {
    const order = await this.orderModel.findOne({ where: { id, userId } });
    if (!order) throw new NotFoundException('Order not found');
    return order;
  }

  async update(
    id: number,
    userId: number,
    dto: UpdateOrderDto,
  ): Promise<Order> {
    const order = await this.findOne(id, userId);
    return await order.update(dto);
  }

  async remove(id: number, userId: number): Promise<void> {
    const order = await this.findOne(id, userId);
    await order.destroy();
  }
}
