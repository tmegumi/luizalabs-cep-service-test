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

  it('should return user data and token for a valid email/password combination', () => {
    const { user, token } = authenticateUser.execute({
      email: 'test@test.com',
      password: '123456',
    });

    expect(token).not.toBeNull();
    expect(user.email).toBe('test@test.com');
  });

  it('should throw an error for an invalid email/password combination', () => {
    const execute = () =>
      authenticateUser.execute({
        email: 'test@email.com',
        password: '123456',
      });

    expect(execute).toThrow(AppError);
  });
});
