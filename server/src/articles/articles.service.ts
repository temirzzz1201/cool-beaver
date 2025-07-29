import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Article } from './article.model';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticlesService {
  constructor(@InjectModel(Article) private articleModel: typeof Article) {}

  create(dto: CreateArticleDto) {
    return this.articleModel.create(dto as any);
  }

  findAll() {
    return this.articleModel.findAll();
  }

  findOne(id: number) {
    return this.articleModel.findByPk(id);
  }

  update(id: number, dto: UpdateArticleDto) {
    return this.articleModel.update(dto, { where: { id } });
  }

  async remove(id: number) {
    const article = await this.articleModel.findByPk(id);
    if (article) {
      await article.destroy();
    }
    return { message: 'Article deleted' };
  }
}
