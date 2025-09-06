import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Order, OrderCreationAttributes } from './order.model';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { MailService } from 'src/mailer/mail.service';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order) private readonly orderModel: typeof Order,
    private mailService: MailService,
  ) {}

  async create(userId: number, dto: CreateOrderDto): Promise<Order> {
    const data: OrderCreationAttributes = {
      ...dto,
      userId,
      status: 'pending',
    };

    const orderText = `
    Новый заказ:
    Название: ${dto.title}
    Номер заказчика: ${dto.phone}
    Описание: ${dto.description || '-'}
    Статус: pending
    `;

    const orderHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
        <h2 style="color:#444;">Новый заказ</h2>
        <p><b>Название:</b> ${dto.title}</p>
        <p><b>Номер заказчика: ${dto.phone}</p>
        <p><b>Описание:</b> ${dto.description || '-'}</p>
        <hr style="border:0;border-top:1px solid #ddd;margin:20px 0;" />
        <p><b>Статус:</b> pending</p>
        <p style="margin-top:30px;font-size:12px;color:#999;">
          Письмо отправлено автоматически системой Tasko
        </p>
      </div>
  `;

    await this.mailService.sendMail(
      'tmzzz@inbox.ru',
      'Заказ Tasko',
      orderText,
      orderHtml,
    );

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
