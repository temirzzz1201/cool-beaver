import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { ContactService } from './contacts.service';
import { ContactDto } from './dto/contact.dto';

@Controller('api/contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post('send')
  async sendContact(@Body() dto: ContactDto) {
    try {
      await this.contactService.createContact(dto);
      return { message: 'Заявка успешно отправлена!' };
    } catch (e) {
      throw new BadRequestException('Ошибка при отправке заявки');
    }
  }
}
