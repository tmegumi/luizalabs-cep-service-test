import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

export default class SessionsController {
  public create(request: Request, response: Response): Response {
    const { email, password } = request.body;

    const authenticateUser = container.resolve(AuthenticateUserService);

    const token = authenticateUser.execute({
      email,
      password,
    });

    return response.json(token);
  }
}
