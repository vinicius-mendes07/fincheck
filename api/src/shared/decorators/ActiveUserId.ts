import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

export const ActiveUserId = createParamDecorator<undefined>(
  (data, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();

    const userId = request.userId as string;

    if (!userId) {
      throw new UnauthorizedException();
    }

    return userId;
  },
);
