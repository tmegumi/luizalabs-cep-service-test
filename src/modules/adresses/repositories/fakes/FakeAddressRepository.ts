import IAdressesRepository from '@modules/adresses/repositories/IAdressesRepository';

import Address from '../../infra/database/entities/Address';

class FakeAdressesRepository implements IAdressesRepository {
  private adresses: Address[] = [
    {
      zipcode: '14780360',
      street: 'Avenida 31',
      neighborhood: 'Centro',
      city: 'Barretos',
      state: 'São Paulo',
    },
  ];

  public find(zipCode: string): Address | null {
    const findAddress = this.adresses.find(
      address => address.zipcode === zipCode,
    );

    return findAddress || null;
  }
}

export default FakeAdressesRepository;
