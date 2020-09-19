import { Router } from 'express';

import UsersRepository from '@modules/users/infra/database/repositories/UsersRepository';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

const sessionsRouter = Router();
const usersRepository = new UsersRepository();

sessionsRouter.post('/', (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = new AuthenticateUserService(usersRepository);

  const token = authenticateUser.execute({
    email,
    password,
  });

  return response.json(token);
});

export default sessionsRouter;
