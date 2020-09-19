import { Router } from 'express';
import { container } from 'tsyringe';

import FindAddressService from '@modules/adresses/services/FindAddressService';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

const addressRouter = Router();

addressRouter.get('/', ensureAuthenticated, (request, response) => {
  const { cep } = request.query;

  const findAddressService = container.resolve(FindAddressService);

  const address = findAddressService.execute({ cep: String(cep) });

  return response.json(address);
});

export default addressRouter;
