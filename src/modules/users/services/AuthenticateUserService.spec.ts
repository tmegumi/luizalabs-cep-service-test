import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import AuthenticateUserService from './AuthenticateUserService';

describe('AuthenticateUser', () => {
  it('should return token for a valid email/password combination', () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const authenticateUserService = new AuthenticateUserService(
      fakeUsersRepository,
    );

    const token = authenticateUserService.execute({
      email: 'test@test.com',
      password: '123456',
    });

    expect(token).not.toBeNull();
  });

  it('should throw and error for an invalid email/password combination', () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const authenticateUserService = new AuthenticateUserService(
      fakeUsersRepository,
    );

    const execute = () =>
      authenticateUserService.execute({
        email: 'test@email.com',
        password: '123456',
      });

    expect(execute).toThrow(AppError);
  });
});
