import { Router } from 'express';

import AdressesRepository from '@modules/adresses/infra/database/repositories/AddressRepository';
import FindAddressService from '@modules/adresses/services/FindAddressService';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

const addressRouter = Router();
const adressesRepository = new AdressesRepository();

addressRouter.get('/', ensureAuthenticated, (request, response) => {
  const { cep } = request.query;

  const findAddressService = new FindAddressService(adressesRepository);

  const address = findAddressService.execute({ cep: String(cep) });

  return response.json(address);
});

export default addressRouter;
