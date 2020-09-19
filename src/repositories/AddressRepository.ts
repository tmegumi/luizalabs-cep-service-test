import addressDatabase from '../database/address.database.json';

import Address from '../models/Address';

class AddressRepository {
  public find(zipCode: string): Address | null {
    const address = addressDatabase.find(item => item.zipcode === zipCode);

    return address || null;
  }
}

export default AddressRepository;
