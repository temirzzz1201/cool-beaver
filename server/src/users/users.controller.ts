import {
  Controller,
  Get,
  Patch,
  Param,
  Body,
  Delete,
  UseGuards,
  UploadedFile,
  UseInterceptors,
  Post,
} from '@nestjs/common';
import { User } from 'src/common/decorators/user.decorator';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { User as UserModel } from 'src/users/user.model';
import { JwtAuthGuard } from 'src/common/guards/roles.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('api/users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('avatar/:id')
  @UseInterceptors(
    FileInterceptor('avatar', {
      storage: diskStorage({
        destination: process.env.AVATAR_UPLOAD_DESTINATION,
        filename: (_, file, cb) => {
          const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, uniqueName + extname(file.originalname));
        },
      }),
    }),
  )
  async uploadAvatar(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.usersService.updateAvatar(+id, file.filename);
  }

  @Delete('avatar/:id')
  async deleteAvatar(@Param('id') id: string) {
    return this.usersService.deleteAvatar(+id);
  }

  @Get('all')
  findAll() {
    return this.usersService.findAll({ excludeRole: 'admin' });
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
