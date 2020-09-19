import { Router } from 'express';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

import AdressesController from '../controllers/AdressesController';

const adressesRouter = Router();
const adressesController = new AdressesController();

adressesRouter.get('/:cep', ensureAuthenticated, adressesController.show);

export default adressesRouter;
