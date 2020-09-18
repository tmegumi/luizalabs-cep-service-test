import request from 'supertest';
import server from '../../src/server';

describe('Address route', () => {
  it('should be able to return address for a valid CEP', async () => {
    const response = await request(server).get('/address?cep=14780360');

    expect(response.body).toMatchObject({
      logradouro: 'Avenida 31',
      bairro: 'Centro',
      cidade: 'Barretos',
      uf: 'SP',
    });
  });

  it('should be able to return address for a valid but not found at first CEP', async () => {
    const response = await request(server).get('/address?cep=01001221');

    expect(response.body).toMatchObject({
      logradouro: 'Praça da Sé',
      bairro: 'Sé',
      cidade: 'São Paulo',
      uf: 'SP',
    });
  });
});
