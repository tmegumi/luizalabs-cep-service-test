import IAdressesRepository from '@modules/adresses/repositories/IAdressesRepository';
import adressesDatabase from '@shared/infra/database/address.database.json';

import Address from '../entities/Address';

class AdressesRepository implements IAdressesRepository {
  public find(zipCode: string): Address | null {
    const findAddress = adressesDatabase.find(
      address => address.zipcode === zipCode,
    );

    return findAddress || null;
  }
}

export default AdressesRepository;
