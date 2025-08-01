import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(email: string, password: string) {
    const existing = await this.usersService.findByEmail(email);
    if (existing) throw new Error('User already exists');
    const user = await this.usersService.create({ email, password });
    return this.createToken(user);
  }

  async login(email: string, password: string) {
    const user = await this.usersService.validateUser(email, password);
    if (!user) throw new UnauthorizedException('Invalid credentials');
    return this.createToken(user);
  }

  async loadUserData(email: string, password: string) {
    const user = await this.usersService.validateUser(email, password);
    if (!user) throw new UnauthorizedException('No such user');
    return user;
  }

  private createToken(user) {
    const payload = { sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
      user: { id: user.id, email: user.email, role: user.role },
    };
  }
}
