import { registerAs } from '@nestjs/config';

export default registerAs('microservice', () => ({
  rmq: {
    url1: process.env.RMQ_URL1,
    api_service_name: process.env.RMQ_API_SERVICE_NAME,
    api_service_queue: process.env.RMQ_API_QUEUE,
  },
  api_gateway_port: process.env.API_GATEWAY_PORT,
  api_service_port: process.env.API_SERVICE_PORT,
}));
