import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async findByEmail(email: string) {
    return this.userModel.findOne({ where: { email } });
  }

  async create(dto: CreateUserDto): Promise<User> {
    const { email, password } = dto;
    const existingAdmin = await this.userModel.findOne({
      where: { role: 'admin' },
    });
    const role = existingAdmin ? 'user' : 'admin';
    const hash = await bcrypt.hash(password, 10);
    console.log('email, password ', email, password);
    console.log('existingAdmin ', existingAdmin);

    return this.userModel.create({ email, password: hash, role } as any);
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
