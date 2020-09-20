import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import AuthenticateUserService from './AuthenticateUserService';

let fakeUsersRepository: FakeUsersRepository;
let authenticateUser: AuthenticateUserService;

describe('AuthenticateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    authenticateUser = new AuthenticateUserService(fakeUsersRepository);
  });

  it('should return token for a valid email/password combination', () => {
    const token = authenticateUser.execute({
      email: 'test@test.com',
      password: '123456',
    });

    expect(token).not.toBeNull();
  });

  it('should throw and error for an invalid email/password combination', () => {
    const execute = () =>
      authenticateUser.execute({
        email: 'test@email.com',
        password: '123456',
      });

    expect(execute).toThrow(AppError);
  });
});
