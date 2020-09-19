import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import replaceLastCharactersByZero from '@shared/utils/replaceLastCharactersByZero';

import { CEP_LENGTH, DEFAULT_CEP } from '@modules/adresses/constants';
import Address from '@modules/adresses/infra/database/entities/Address';

import IAdressesRepository from '../repositories/IAdressesRepository';

interface IRequest {
  cep: string;
}

interface IResponse {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
}

@injectable()
class FindAddressService {
  constructor(
    @inject('AdressesRepository')
    private adressesRepository: IAdressesRepository,
  ) {}

  public execute({ cep }: IRequest): IResponse {
    const cepIsNumber = /^\d+$/.test(cep);

    if (!cepIsNumber || cep.length !== CEP_LENGTH) {
      throw new AppError('Invalid CEP.');
    }

    const address = this.recursiveFindAddressByCep(cep, 1);

    if (!address) {
      throw new AppError('CEP not found.');
    }

    return {
      street: address.street,
      neighborhood: address.neighborhood,
      city: address.city,
      state: address.state,
    };
  }

  private recursiveFindAddressByCep(
    cep: string,
    counter: number,
  ): Address | null {
    const address = this.adressesRepository.find(cep);

    if (!address && cep !== DEFAULT_CEP) {
      const newCep = replaceLastCharactersByZero(cep, counter);

      return this.recursiveFindAddressByCep(newCep, counter + 1);
    }

    return address;
  }
}

export default FindAddressService;
