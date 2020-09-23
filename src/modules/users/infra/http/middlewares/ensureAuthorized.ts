import { Request, Response, NextFunction } from 'express';

import userRoles from '@modules/users/constants/roles';
import AppError from '@shared/errors/AppError';

export default function ensureAuthorized(
  request: Request,
  resposne: Response,
  next: NextFunction,
): void {
  const { role } = request.user;

  if (role !== Number(userRoles.Admin)) {
    throw new AppError('Acesso não autorizado.', 401);
  }

  return next();
}
