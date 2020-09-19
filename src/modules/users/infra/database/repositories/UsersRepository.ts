import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import usersDatabase from '@shared/infra/database/users.database.json';

import User from '../entities/User';

class UsersRepository implements IUsersRepository {
  public find(email: string, password: string): User | null {
    const userFind = usersDatabase.find(
      user => user.email === email && user.password === password,
    );

    return userFind || null;
  }
}

export default UsersRepository;
