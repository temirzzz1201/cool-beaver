import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('api/articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post('create')
  create(@Body() dto: CreateArticleDto) {
    return this.articlesService.create(dto);
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

  @Put('update/:id')
  update(@Param('id') id: string, @Body() dto: UpdateArticleDto) {
    return this.articlesService.update(+id, dto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.articlesService.remove(+id);
  }
}
