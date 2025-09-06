import {
  Controller,
  Get,
  Patch,
  Param,
  Body,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { User } from 'src/common/decorators/user.decorator';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { User as UserModel } from 'src/users/user.model';
import { JwtAuthGuard } from 'src/common/guards/roles.guard';

@Controller('api/users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('all')
  findAll() {
    return this.usersService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateUserDto,
    @User() user: UserModel,
  ) {
    return this.usersService.update(+id, user.id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @User() user: UserModel) {
    return this.usersService.remove(+id, user.id);
  }
}
