import { Router } from 'express';

const healthRouter = Router();

healthRouter.get('/', (request, response) => {
  const healthCheck = {
    uptime: process.uptime(),
    status: 'UP',
    message: 'Server is health',
    timestamp: Date.now(),
  };

  try {
    return response.json(healthCheck);
  } catch (ex) {
    healthCheck.message = ex;
    healthCheck.status = 'DOWN';

    return response.json(503).json(healthCheck);
  }
});

export default healthRouter;
