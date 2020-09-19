import AppError from '@shared/errors/AppError';
import FakeAdressesRepository from '../repositories/fakes/FakeAddressRepository';
import FindAddressService from './FindAddressService';

describe('FindAddress', () => {
  it('should return address for a valid CEP', () => {
    const fakeAdressesRepository = new FakeAdressesRepository();
    const findAddressService = new FindAddressService(fakeAdressesRepository);

    const address = findAddressService.execute({ cep: '14780360' });

    expect(address).toMatchObject({
      street: 'Avenida 31',
      neighborhood: 'Centro',
      city: 'Barretos',
      state: 'São Paulo',
    });
  });

  it('should throw an error if requested CEP is not a number', () => {
    const fakeAdressesRepository = new FakeAdressesRepository();
    const findAddressService = new FindAddressService(fakeAdressesRepository);

    const execute = () => findAddressService.execute({ cep: 'Test' });

    expect(execute).toThrow(AppError);
  });

  it('should throw an error if requested CEP has not valid length', () => {
    const fakeAdressesRepository = new FakeAdressesRepository();
    const findAddressService = new FindAddressService(fakeAdressesRepository);

    const execute = () => findAddressService.execute({ cep: '1478036' });

    expect(execute).toThrow(AppError);
  });

  it('should throw an error for a valid but not found CEP', () => {
    const fakeAdressesRepository = new FakeAdressesRepository();
    const findAddressService = new FindAddressService(fakeAdressesRepository);

    const execute = () => findAddressService.execute({ cep: '14021360' });

    expect(execute).toThrow(AppError);
  });
});
