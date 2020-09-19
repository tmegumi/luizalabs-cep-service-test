import addressDatabase from '@shared/infra/database/address.database.json';

import Address from '../entities/Address';

class AddressRepository {
  public find(zipCode: string): Address | null {
    const address = addressDatabase.find(item => item.zipcode === zipCode);

    return address || null;
  }
}

export default AddressRepository;
