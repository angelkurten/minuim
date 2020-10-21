import { ClientOptions, Transport } from '@nestjs/microservices';
import { MuLogger } from '@mu/mu-common/logging';
import { GrpcOptions } from '@nestjs/microservices/interfaces/microservice-configuration.interface';

const logger = new MuLogger('grpc-configuration');

logger.log(`GRPC Config Dir: ${__dirname}`);
logger.log(`GRPC Config FileName: ${__filename}`);

export const grpcClientOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:50051',
    package: 'com.mu.logistic.api',
    protoPath: 'apps/mu-platform/src/services.api.proto',
    loader: {
      includeDirs: ['./src'],
    },
  },
};
