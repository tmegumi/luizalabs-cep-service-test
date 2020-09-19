import { sign } from 'jsonwebtoken';

import authConfig from '../config/auth';
import AppError from '../errors/AppError';

import UserRepository from '../repositories/UserRepository';

interface Request {
  email: string;
  password: string;
}

interface Response {
  token: string;
}

class AuthenticateUserService {
  private readonly userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  public execute({ email, password }: Request): Response {
    const user = this.userRepository.find(email, password);

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
