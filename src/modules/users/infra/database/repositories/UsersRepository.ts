import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import usersDatabase from '@shared/infra/database/users.database.json';

import User from '../entities/User';

class UsersRepository implements IUsersRepository {
  public find(email: string, password: string): User | null {
    const user = usersDatabase.find(
      item => item.email === email && item.password === password,
    );

    return user || null;
  }
}

export default UsersRepository;
