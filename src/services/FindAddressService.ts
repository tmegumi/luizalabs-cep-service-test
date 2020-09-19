import AddressRepository from '../repositories/AddressRepository';

import { CEP_LENGTH, DEFAULT_CEP } from '../constants';
import AppError from '../errors/AppError';
import replaceLastCharactersByZero from '../utils/replaceLastCharactersByZero';
import Address from '../models/Address';

interface Request {
  cep: string;
}

interface Response {
  logradouro: string;
  bairro: string;
  cidade: string;
  uf: string;
}

class FindAddressService {
  private readonly addressRepository: AddressRepository;

  constructor() {
    this.addressRepository = new AddressRepository();
  }

  public execute({ cep }: Request): Response {
    const cepIsNumber = /^\d+$/.test(cep);

    if (!cepIsNumber || cep.length !== CEP_LENGTH) {
      throw new AppError('CEP inválido');
    }

    const address = this.recursiveFindAddressByCep(cep, 1);

    if (!address) {
      throw new AppError('CEP não encontrado');
    }

    return {
      logradouro: address.logradouro,
      bairro: address.bairro,
      cidade: address.cidade,
      uf: address.uf,
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
