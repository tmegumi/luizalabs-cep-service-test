import { Request, Response } from 'express';
import { container } from 'tsyringe';

import FindAddressService from '@modules/adresses/services/FindAddressService';

export default class AdressesController {
  public show(request: Request, response: Response): Response {
    const { cep } = request.params;

    const findAddressService = container.resolve(FindAddressService);

    const address = findAddressService.execute({ cep: String(cep) });

    return response.json(address);
  }
}
