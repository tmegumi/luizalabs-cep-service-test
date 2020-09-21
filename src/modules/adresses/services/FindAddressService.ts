import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import getLastCharactersAsCharLength from '@shared/utils/getLastCharactersAsCharLength';
import replaceLastCharacters from '@shared/utils/replaceLastCharacters';
import { isValidLength, isNumber } from '@shared/utils/validateInput';

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
    if (!isNumber(cep) || !isValidLength(cep, CEP_LENGTH, CEP_LENGTH)) {
      throw new AppError('CEP inválido.');
    }

    const length = getLastCharactersAsCharLength(cep, '0');

    const address = this.recursiveFindAddressByCep(cep, length);

    if (!address) {
      throw new AppError('CEP não encontrado.');
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
    lastCharactersAsZeroLength: number,
  ): Address | null {
    const address = this.adressesRepository.find(cep);

    if (!address && cep !== DEFAULT_CEP) {
      const newCep = replaceLastCharacters(
        cep,
        '0',
        lastCharactersAsZeroLength,
      );

      return this.recursiveFindAddressByCep(
        newCep,
        lastCharactersAsZeroLength + 1,
      );
    }

    return address;
  }
}

export default FindAddressService;
