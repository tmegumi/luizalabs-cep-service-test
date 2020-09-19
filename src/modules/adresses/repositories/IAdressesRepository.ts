import Address from '../infra/database/entities/Address';

export default interface IAdressesRepository {
  find(zipCode: string): Address | null;
}
