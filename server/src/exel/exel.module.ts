import { Module } from '@nestjs/common';
import { ExcelService } from './excel.service';
import { ExcelController } from './exel.controller';
import { OrdersModule } from '../orders/orders.module';
import { UsersModule } from '../users/users.module';
import { ArticlesModule } from '../articles/articles.module';

@Module({
  imports: [OrdersModule, UsersModule, ArticlesModule],
  controllers: [ExcelController],
  providers: [ExcelService],
})
export class ExcelModule {}
