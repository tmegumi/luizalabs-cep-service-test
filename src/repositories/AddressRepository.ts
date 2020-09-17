import addressDatabase from '../database/address.database.json';

import Address from '../models/Address';

class AddressRepository {
  public findByCep(cep: string): Address | null {
    const address = addressDatabase.find(item => item.cep === cep);

    return address || null;
  }
}

export default AddressRepository;
