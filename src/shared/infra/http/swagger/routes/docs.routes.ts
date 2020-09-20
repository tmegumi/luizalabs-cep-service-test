import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';

import swaggerDocument from '..';

const apiDocsRouter = Router();

apiDocsRouter.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default apiDocsRouter;
