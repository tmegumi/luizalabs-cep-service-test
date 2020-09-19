import { Router } from 'express';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = new AuthenticateUserService();

  const token = authenticateUser.execute({
    email,
    password,
  });

  return response.json(token);
});

export default sessionsRouter;
