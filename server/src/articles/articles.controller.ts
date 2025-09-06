import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { UploadedFiles } from '@nestjs/common';

@Controller('api/articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post('create')
  @UseInterceptors(
    FilesInterceptor('images', 5, {
      storage: diskStorage({
        destination: process.env.IMAGE_UPLOAD_DESTINATION,
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, uniqueSuffix + extname(file.originalname));
        },
      }),
    }),
  )
  create(
    @Body() dto: CreateArticleDto,
    @UploadedFiles() files?: Express.Multer.File[],
  ) {
    return this.articlesService.create(dto, files);
  }

  @Get()
  findAll() {
    return this.articlesService.findAll();
  }

  @Get('paginated')
  findPaginated(
    @Query('page') page = 1,
    @Query('limit') limit = 12,
    @Query('q') q?: string,
  ) {
    return this.articlesService.findPaginated(+page, +limit, q);
  }

  @Get('last')
  findLast() {
    return this.articlesService.findLast();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articlesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateArticleDto) {
    return this.articlesService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articlesService.remove(+id);
  }
}
