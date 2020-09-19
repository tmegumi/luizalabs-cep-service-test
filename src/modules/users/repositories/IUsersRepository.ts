import User from '../infra/database/entities/User';

export default interface IUsersRepository {
  find(email: string, password: string): User | null;
}
