import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import * as bcrypt from 'bcrypt';
import { UsersDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async findByEmail(email: string) {
    return this.userModel.findOne({ where: { email } });
  }

  async findById(id: string) {
    return this.userModel.findOne({ where: { id } });
  }

  async findByResetPasswordToken(token: string) {
    return this.userModel.findOne({
      where: { resetPasswordToken: token },
    });
  }

  async create(dto: UsersDto): Promise<User> {
    const { name, phone, email, password } = dto;
    const existingAdmin = await this.userModel.findOne({
      where: { role: 'admin' },
    });
    const role = existingAdmin ? 'user' : 'admin';
    const hash = await bcrypt.hash(password, 10);

    console.log('phone aaaaaaaaaaaaaaaaaaaaaaaaa ', phone);

    const isAdmin = !existingAdmin;
    const phoneToSave = isAdmin ? '0000000000' : phone;

    return this.userModel.create({
      name,
      phone: phoneToSave,
      email,
      password: hash,
      role,
    } as any);
  }

  async validateUser(email: string, password: string) {
    const user = await this.findByEmail(email);
    if (!user) return null;
    const isMatch = await bcrypt.compare(password, user.password);
    return isMatch ? user : null;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }
}
