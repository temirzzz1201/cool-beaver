import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Article } from './article.model';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Op } from 'sequelize';

@Injectable()
export class ArticlesService {
  constructor(@InjectModel(Article) private articleModel: typeof Article) {}

  create(dto: CreateArticleDto) {
    return this.articleModel.create(dto as any);
  }

  findAll() {
    return this.articleModel.findAll();
  }

  findLast() {
    return this.articleModel.findOne({
      order: [['id', 'DESC']],
    });
  }

  async findPaginated(page: number, limit: number, q?: string) {
    const offset = (page - 1) * limit;

    const where: any = {};
    if (q) {
      where.title = { [Op.iLike]: `%${q}%` }; // поиск по названию
    }

    const { rows, count } = await this.articleModel.findAndCountAll({
      where,
      offset,
      limit,
      order: [['createdAt', 'DESC']],
    });

    return { data: rows, total: count };
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
