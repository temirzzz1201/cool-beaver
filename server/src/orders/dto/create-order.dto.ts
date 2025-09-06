import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsPhoneNumber,
} from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsPhoneNumber('RU')
  readonly phone: string;

  @IsOptional()
  @IsString()
  readonly description?: string;
}
