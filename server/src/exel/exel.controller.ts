import { Controller, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { ExcelService } from './excel.service';
import { OrdersService } from '../orders/orders.service';
import { UsersService } from '../users/users.service';
import { ArticlesService } from '../articles/articles.service';

@Controller('api/excel')
export class ExcelController {
  constructor(
    private readonly excelService: ExcelService,
    private readonly ordersService: OrdersService,
    private readonly usersService: UsersService,
    private readonly articlesService: ArticlesService,
  ) {}

  @Post('export')
  async export(
    @Query('type') type: 'orders' | 'users' | 'articles',
    @Res() res: Response,
  ) {
    let data: any[] = [];
    let sheetName = '';

    switch (type) {
      case 'orders':
        data = await this.ordersService.findAll();
        sheetName = 'Заказы';
        break;
      case 'users':
        data = await this.usersService.findAll();
        sheetName = 'Пользователи';
        break;
      case 'articles':
        data = await this.articlesService.findAll();
        sheetName = 'Статьи';
        break;
      default:
        return res.status(400).json({ message: 'Invalid type' });
    }

    const cleanData = data.map((item) =>
      'toJSON' in item ? item.toJSON() : item,
    );

    const buffer = await this.excelService.exportToExcel(cleanData, sheetName);

    const nodeBuffer = Buffer.from(buffer);

    res.setHeader(
      'Content-Disposition',
      `attachment; filename=${encodeURIComponent(sheetName)}.xlsx`,
    );
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );

    res.send(nodeBuffer);
  }
}
