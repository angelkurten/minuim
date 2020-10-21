import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class MuLogger extends Logger {
  // tslint:disable-next-line:no-any
  error(message: any, trace?: string | Error, context?: string): void {
    if (trace instanceof Error) {
      super.error(message, `${new Error().stack} ${trace.message}\n${trace.stack}`);
    } else {
      super.error(message, trace, context);
    }
  }
}
