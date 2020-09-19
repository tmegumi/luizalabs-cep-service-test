import IAdressesRepository from '@modules/adresses/repositories/IAdressesRepository';
import adressesDatabase from '@shared/infra/database/address.database.json';

import Address from '../entities/Address';

class AdressesRepository implements IAdressesRepository {
  public find(zipCode: string): Address | null {
    const address = adressesDatabase.find(item => item.zipcode === zipCode);

    return address || null;
  }
}

export default AdressesRepository;
