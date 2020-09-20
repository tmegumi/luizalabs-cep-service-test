import { Router } from 'express';

import adressesRouter from '@modules/adresses/infra/http/routes/adresses.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';

import apiDocsRouter from '../swagger/routes/docs.routes';

const routes = Router();

routes.use('/adresses', adressesRouter);
routes.use('/api-docs', apiDocsRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
