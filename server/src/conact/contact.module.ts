import { Module } from '@nestjs/common';
import { MailModule } from 'src/mailer/mail.module';
import { ContactController } from './contact.controller';
import { ContactService } from './contacts.service';

@Module({
  imports: [MailModule],
  controllers: [ContactController],
  providers: [ContactService],
  exports: [ContactService],
})
export class ContactModule {}
