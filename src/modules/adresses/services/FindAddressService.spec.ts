import AppError from '@shared/errors/AppError';

import FakeAdressesRepository from '../repositories/fakes/FakeAddressRepository';
import FindAddressService from './FindAddressService';

let fakeAdressesRepository: FakeAdressesRepository;
let findAddress: FindAddressService;

describe('FindAddress', () => {
  beforeEach(() => {
    fakeAdressesRepository = new FakeAdressesRepository();
    findAddress = new FindAddressService(fakeAdressesRepository);
  });

  it('should return address for a valid CEP', () => {
    const address = findAddress.execute({ cep: '14780360' });

    expect(address).toMatchObject({
      street: 'Avenida 31',
      neighborhood: 'Centro',
      city: 'Barretos',
      state: 'São Paulo',
    });
  });

  it('should throw an error if requested CEP is not a number', () => {
    const execute = () => findAddress.execute({ cep: 'Test' });

    expect(execute).toThrow(AppError);
  });

  it('should throw an error if requested CEP has not valid length', () => {
    const execute = () => findAddress.execute({ cep: '1478036' });

    expect(execute).toThrow(AppError);
  });

  it('should throw an error for a valid but not found CEP', () => {
    const execute = () => findAddress.execute({ cep: '14021360' });

    expect(execute).toThrow(AppError);
  });
});
