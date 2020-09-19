import { Router } from 'express';

import adressesRouter from '@modules/adresses/infra/http/routes/adresses.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/adresses', adressesRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
