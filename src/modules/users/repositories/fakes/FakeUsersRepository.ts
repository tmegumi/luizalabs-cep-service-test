import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import User from '../../infra/database/entities/User';

class FakrUsersRepository implements IUsersRepository {
  private users: User[] = [
    {
      id: '407e397c-8396-49d2-b409-3edc65de3e76',
      email: 'test@test.com',
      password: '123456',
      role: 1,
    },
  ];

  public find(email: string, password: string): User | null {
    const userFind = this.users.find(
      user => user.email === email && user.password === password,
    );

    return userFind || null;
  }
}

export default FakrUsersRepository;
