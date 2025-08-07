import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
// import { CreateUserDto } from './dto/create-user.dto';

@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // @Post('register')
  // register(@Body() dto: CreateUserDto) {
  //   return this.usersService.create(dto);
  // }

  @Get('all')
  findAll() {
    return this.usersService.findAll();
  }
}
