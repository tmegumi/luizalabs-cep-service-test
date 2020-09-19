import AddressRepository from '../repositories/AddressRepository';

import { CEP_LENGTH, DEFAULT_CEP } from '../constants';
import AppError from '../errors/AppError';
import replaceLastCharactersByZero from '../utils/replaceLastCharactersByZero';
import Address from '../models/Address';

interface Request {
  cep: string;
}

interface Response {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
}

class FindAddressService {
  private readonly addressRepository: AddressRepository;

  constructor() {
    this.addressRepository = new AddressRepository();
  }

  public execute({ cep }: Request): Response {
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
    const address = this.addressRepository.findByCep(cep);

    if (!address && cep !== DEFAULT_CEP) {
      const newCep = replaceLastCharactersByZero(cep, counter);

      return this.recursiveFindAddressByCep(newCep, counter + 1);
    }

    return address;
  }
}

export default FindAddressService;
