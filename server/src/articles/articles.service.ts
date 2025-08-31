import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Article } from './article.model';
import { ArticleImage } from './articles-image.model';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Op } from 'sequelize';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article) private articleModel: typeof Article,
    @InjectModel(ArticleImage) private articleImageModel: typeof ArticleImage,
  ) {}

  async create(dto: CreateArticleDto, files?: Express.Multer.File[]) {
    const article = await this.articleModel.create(dto as any);

    if (files && files.length > 0) {
      const images = files.map((file) => ({
        articleId: article.id,
        path: `/uploads/articles/${file.filename}`,
      }));
      await this.articleImageModel.bulkCreate(images as any);
    }

    return this.findOne(article.id);
  }

  findAll() {
    return this.articleModel.findAll({ include: [ArticleImage] });
  }

  findOne(id: number) {
    return this.articleModel.findByPk(id, { include: [ArticleImage] });
  }

  findLast() {
    return this.articleModel.findAll({
      order: [['id', 'DESC']],
      limit: 4,
      include: [ArticleImage],
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
      include: [ArticleImage],
    });

    return { data: rows, total: count };
  }

  update(id: number, dto: UpdateArticleDto) {
    return this.articleModel.update(dto, { where: { id } });
  }

  async remove(id: number) {
    const article = await this.articleModel.findByPk(id);
    if (article) {
      await article.destroy();
    }
    return { message: 'Статья удалена' };
  }
}
