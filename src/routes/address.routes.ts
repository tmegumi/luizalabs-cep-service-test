import { Router } from 'express';

import FindAddressService from '../services/FindAddressService';

const addressRouter = Router();

addressRouter.get('/', (request, response) => {
  const { cep } = request.query;

  const findAddressService = new FindAddressService();

  const address = findAddressService.execute({ cep: String(cep) });

  return response.json(address);
});

export default addressRouter;