import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User as UserModel } from 'src/users/user.model';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): UserModel => {
    const request = ctx.switchToHttp().getRequest();
    if (!request.user) {
      throw new Error('User not found on request');
    }
    return request.user;
  },
);
