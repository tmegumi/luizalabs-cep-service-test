import { sign } from 'jsonwebtoken';

import authConfig from '@config/auth';
import AppError from '@shared/errors/AppError';

import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  token: string;
}

class AuthenticateUserService {
  constructor(private userRepository: IUsersRepository) {}

  public execute({ email, password }: IRequest): IResponse {
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
