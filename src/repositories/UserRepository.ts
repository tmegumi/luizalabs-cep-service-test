import usersDatabase from '../database/users.database.json';

import User from '../models/User';

class UserRepository {
  public find(email: string, password: string): User | null {
    const user = usersDatabase.find(
      item => item.email === email && item.password === password,
    );

    return user || null;
  }
}

export default UserRepository;
