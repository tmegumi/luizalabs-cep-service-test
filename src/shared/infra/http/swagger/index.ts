const swaggerDocument = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'CEP Service',
    description:
      'This is an address search service by CEP for authenticated users',
    contact: {
      name: 'Thais Megumi',
      email: 'tha.megumi@gmail.com',
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  tags: [
    {
      name: 'sessions',
    },
    {
      name: 'adresses',
    },
  ],
  servers: [
    {
      url: 'http://localhost:3333',
      description: 'Local server',
    },
  ],
  paths: {
    '/sessions': {
      post: {
        tags: ['sessions'],
        summary: 'get JWT token',
        description: 'Get JWT authentication token that expires in 1 day',
        consumes: ['application/json'],
        produces: ['application/json'],
        requestBody: {
          required: true,
          description: 'User email and password to authenticate',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UserLogin',
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Authentication token',
            schema: {
              $ref: '#/components/schemas/AccessToken',
            },
          },
          '401': {
            description: 'Invalid user or password',
          },
        },
      },
    },
    '/adresses/{cep}': {
      get: {
        tags: ['adresses'],
        summary: 'find address by CEP number',
        description:
          'Find an address given a CEP number. Each address is identified by a numeric `cep`.',
        produces: ['application/json'],
        parameters: [
          {
            in: 'path',
            name: 'cep',
            description: 'CEP number',
            required: true,
            type: 'string',
          },
        ],
        security: [
          {
            bearerAuth: [],
          },
        ],
        responses: {
          '200': {
            description: 'Address result for given CEP',
            schema: {
              $ref: '#/components/schemas/Address',
            },
          },
          '400': {
            description: 'Bad input parameter',
          },
          '401': {
            description: 'Authorization information is missing or invalid',
          },
        },
      },
    },
    '/health': {
      get: {
        tags: ['health'],
        summary: 'health checker',
        description: 'Check server healthy.',
        produces: ['application/json'],
        security: [
          {
            bearerAuth: [],
          },
        ],
        responses: {
          '200': {
            description: 'Server is up',
            schema: {
              $ref: '#/components/schemas/HealthChecker',
            },
          },
          '503': {
            description: 'Server is down',
            schema: {
              $ref: '#/components/schemas/HealthChecker',
            },
          },
        },
      },
    },
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      AccessToken: {
        type: 'object',
        properties: {
          user: {
            schema: {
              $ref: '#/components/schemas/UserResponse',
            },
          },
          token: {
            type: 'string',
            example:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDA1NDg5NzUsImV4cCI6MTYwMDYzNTM3NSwic3ViIjoiNDA3ZTM5N2MtODM5Ni00OWQyLWI0MDktM2VkYzY1ZGUzZTc2In0.cbR12xxrkRiIUX9lfoZSlR2zPm_kiZpRTqnDcUHEQI8',
          },
        },
      },
      HealthCheck: {
        type: 'object',
        properties: {
          uptime: {
            type: 'number',
            example: '18.226527',
          },
          status: {
            type: 'string',
            example: 'UP',
          },
          message: {
            type: 'string',
            example: 'Server is health',
          },
          timestamp: {
            type: 'string',
            example: '1600814478731',
          },
        },
      },
      UserLogin: {
        type: 'object',
        required: ['email', 'password'],
        properties: {
          email: {
            type: 'string',
            format: 'email',
            example: 'john@test.com',
          },
          password: {
            type: 'string',
            example: '123456',
          },
        },
      },
      UserResponse: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            example: '407e397c-8396-49d2-b409-3edc65de3e76',
          },
          email: {
            type: 'string',
            example: 'test@test.com',
          },
          role: {
            type: 'int',
            example: 1,
          },
        },
      },
      Address: {
        properties: {
          street: {
            type: 'string',
            example: 'Praça da Sé',
          },
          neighborhood: {
            type: 'string',
            example: 'Sé',
          },
          city: {
            type: 'string',
            example: 'São Paulo',
          },
          state: {
            type: 'string',
            example: 'São Paulo',
          },
        },
      },
    },
  },
};

export default swaggerDocument;
