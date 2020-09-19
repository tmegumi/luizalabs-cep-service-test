import 'reflect-metadata';

import { container } from 'tsyringe';

import IAdressesRepository from '@modules/adresses/repositories/IAdressesRepository';
import AdressesRepository from '@modules/adresses/infra/database/repositories/AddressRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/database/repositories/UsersRepository';

container.registerSingleton<IAdressesRepository>(
  'AdressesRepository',
  AdressesRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
