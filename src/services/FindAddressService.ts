import AddressRepository from '../repositories/AddressRepository';

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
  public execute({ cep }: Request): Response {
    const cepIsNumber = Number.isNaN(Number(cep));

    if (!cepIsNumber || cep.length !== 8) {
      throw new Error('CEP inválido');
    }

    const addressRepository = new AddressRepository();

    const address = addressRepository.findByCep(cep);

    if (!address) {
      throw new Error('CEP não encontrado');
    }

    return {
      logradouro: address.logradouro,
      bairro: address.bairro,
      cidade: address.cidade,
      uf: address.uf,
    };
  }
}

export default FindAddressService;
