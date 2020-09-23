import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ensureAuthorized from '@modules/users/infra/http/middlewares/ensureAuthorized';

import AdressesController from '../controllers/AdressesController';

const adressesRouter = Router();
const adressesController = new AdressesController();

adressesRouter.get(
  '/:cep',
  [ensureAuthenticated, ensureAuthorized],
  adressesController.show,
);

export default adressesRouter;
