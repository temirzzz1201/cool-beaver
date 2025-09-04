import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { MailService } from '../mailer/mail.service';
import { JwtService } from '@nestjs/jwt';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private mailService: MailService,
  ) {}

  async register(name: string, phone: string, email: string, password: string) {
    const existing = await this.usersService.findByEmail(email);
    if (existing) throw new Error('User already exists');
    const user = await this.usersService.create({
      name,
      phone,
      email,
      password,
    });
    return this.createToken(user);
  }

  async login(email: string, password: string) {
    const user = await this.usersService.validateUser(email, password);
    if (!user) throw new UnauthorizedException('Invalid credentials');
    return this.createToken(user);
  }

  private createToken(user) {
    const payload = { id: user.id, role: user.role, name: user.name };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        name: user.name,
      },
    };
  }

  async createPasswordLink(user) {
    const resetToken = crypto.randomBytes(32).toString('hex');
    const hashedToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');
    const tokenExpiry = Date.now() + 3600000;

    console.log('Generated Token:', resetToken);
    console.log('Hashed Token:', hashedToken);

    user.resetPasswordToken = hashedToken;
    user.resetPasswordExpires = tokenExpiry;
    await user.save();

    const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

    this.mailService.sendMail(
      user.email,
      'Ссылка для восстановления пароля, действует 1 час!',
      resetUrl,
      `<a href="${resetUrl}">Перейти, что бы восстановить</a>`,
    );
  }

  async findByResetPasswordToken(token: string) {
    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

    return this.usersService.findByResetPasswordToken(hashedToken);
  }
}
