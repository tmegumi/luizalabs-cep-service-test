import { sign } from 'jsonwebtoken';

import authConfig from '../config/auth';
import AppError from '../errors/AppError';

interface Request {
  email: string;
  password: string;
}

interface Response {
  token: string;
}

const users = [
  {
    id: '407e397c-8396-49d2-b409-3edc65de3e76',
    email: 'test@test.com',
    password: '123456',
  },
];

class AuthenticateUserService {
  public execute({ email, password }: Request): Response {
    const user = users.find(
      item => item.email === email && item.password === password,
    );

    if (!user) {
      throw new AppError('Invalid user or password.', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      token,
    };
  }
}

export default AuthenticateUserService;
