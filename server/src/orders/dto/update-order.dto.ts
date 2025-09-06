import { IsOptional, IsString, IsIn } from 'class-validator';

export class UpdateOrderDto {
  @IsOptional()
  @IsString()
  readonly title?: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsOptional()
  images?: string[];

  @IsOptional()
  @IsIn(['new', 'in_progress', 'done', 'canceled'])
  readonly status?: 'new' | 'in_progress' | 'done' | 'canceled';
}
