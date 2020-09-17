import { Router } from 'express';

const cepRouter = Router();

cepRouter.get('/', (request, response) => {
  return response.send('Returning CEP');
});

export default cepRouter;
