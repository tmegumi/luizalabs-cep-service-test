import express from 'express';

import '@shared/container';

import appErrorHandler from './middlewares/appErrorHandler';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.use(appErrorHandler);

const server = app.listen(3333);

export default server;
