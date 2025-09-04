import { Injectable } from '@nestjs/common';
import { MailService } from '../mailer/mail.service';
import { ContactDto } from './dto/contact.dto';

@Injectable()
export class ContactService {
  constructor(private mailService: MailService) {}

  async createContact(dto: ContactDto) {
    const orderText = `
    С вами хотят связаться:
    Имя: ${dto.name}
    Номер телефона: ${dto.phone || '-'}
    Эл.почта: ${dto.email || '-'}
    Описание заявки: ${dto.description || '-'}
    Статус: pending
    `;

    const orderHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
        <h2 style="color:#444;">С вами хотят связаться...</h2>
        <p><b>Имя:</b> ${dto.name}</p>
        <p><b>Номер телефона:</b> ${dto.phone || '-'}</p>
        <p><b>Эл.почта:</b> ${dto.email || '-'}</p>
        <p><b>Описание заявки: ${dto.description || '-'}</p>

        <hr style="border:0;border-top:1px solid #ddd;margin:20px 0;" />
        <p><b>Статус:</b> pending</p>
        <p style="margin-top:30px;font-size:12px;color:#999;">
          Письмо отправлено автоматически системой Tasko
        </p>
      </div>
  `;

    await this.mailService.sendMail(
      'tmzzz@inbox.ru',
      'Контакт Tasko',
      orderText,
      orderHtml,
    );
  }
}
