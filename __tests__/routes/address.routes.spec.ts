import request from 'supertest';
import server from '../../src/server';

describe('Address route', () => {
  afterEach(() => server.close());

  it('should be able to return address for a valid CEP', async () => {
    const response = await request(server).get('/address?cep=14780360');

    expect(response.body).toMatchObject({
      street: 'Avenida 31',
      neighborhood: 'Centro',
      city: 'Barretos',
      state: 'São Paulo',
    });
  });

  it('should be able to return address for a valid but not found at first CEP', async () => {
    const response = await request(server).get('/address?cep=01001221');

    expect(response.body).toMatchObject({
      street: 'Praça da Sé',
      neighborhood: 'Sé',
      city: 'São Paulo',
      state: 'São Paulo',
    });
  });
});
