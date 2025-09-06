import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { JwtAuthGuard } from 'src/common/guards/roles.guard';
import { User } from 'src/common/decorators/user.decorator';
import { User as UserModel } from 'src/users/user.model';

@Controller('api/orders')
@UseGuards(JwtAuthGuard)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post('create')
  create(@Body() dto: CreateOrderDto, @User() user: UserModel) {
    return this.ordersService.create(user.id, dto);
  }

  @Get('all')
  findAll() {
    return this.ordersService.findAll();
  }

  @Get('my-orders')
  findMy(@User() user: UserModel) {
    return this.ordersService.findMy(user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @User() user: UserModel) {
    return this.ordersService.findOne(+id, user.id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateOrderDto,
    @User() user: UserModel,
  ) {
    return this.ordersService.update(+id, user.id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @User() user: UserModel) {
    return this.ordersService.remove(+id, user.id);
  }
}
