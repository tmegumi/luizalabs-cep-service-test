import { Router } from 'express';

import addressRouter from './address.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/address', addressRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
