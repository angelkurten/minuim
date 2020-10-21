import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MuLogger } from '@mu/mu-common/logging';
import 'source-map-support/register';
import { grpcClientOptions } from './grpc-client.conf';
// tslint:disable-next-line:no-any
declare const module: any;

async function bootstrap() {
  const logger = new MuLogger('MU Sever');
  const banner =
    '\r\n  __  __ _    _    _____ ______ _______      ________ _____  \r\n |  \\/  | |  | |  / ____|  ____|  __ \\ \\    / /  ____|  __ \\ \r\n | \\  / | |  | | | (___ | |__  | |__) \\ \\  / /| |__  | |__) |\r\n | |\\/| | |  | |  \\___ \\|  __| |  _  / \\ \\/ / |  __| |  _  / \r\n | |  | | |__| |  ____) | |____| | \\ \\  \\  /  | |____| | \\ \\ \r\n |_|  |_|\\____/  |_____/|______|_|  \\_\\  \\/   |______|_|  \\_\\\r\n';
  // tslint:disable-next-line:no-console
  console.log(banner);
  // tslint:disable-next-line:no-console
  console.log('V1.0.0');

  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();
  app.connectMicroservice(grpcClientOptions);
  await app.startAllMicroservicesAsync();
  const port = process.env.PORT || 3000;
  await app.listen(port);
  app.setGlobalPrefix('api');

  logger.log(`GRPC Server listening on PORT ${grpcClientOptions.options.url}`);
  logger.log(`WEB Server listening on PORT ${port}`);
}
bootstrap();
