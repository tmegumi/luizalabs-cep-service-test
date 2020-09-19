import { Router } from 'express';

import addressRouter from '@modules/address/infra/http/routes/address.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/address', addressRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
