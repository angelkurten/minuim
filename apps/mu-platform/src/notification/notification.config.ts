import { Injectable } from '@nestjs/common';

@Injectable()
export class DbConfig {
  getHost(): string {
    return process.env.DB_HOST || '';
  }

  getUser(): string {
    return process.env.DB_USER || '';
  }

  getPassword(): string {
    return process.env.DB_PASSWORD || '';
  }

  getPort(): number {
    let portNumber = 3306;
    if (process.env.DB_PORT) {
      portNumber = parseFloat(process.env.DB_PORT);
    }
    return portNumber;
  }

  getDatabase(): string {
    return process.env.DB_DATABASE || '';
  }

  getDefaultQueryTimeOut(): number {
    let portNumber = 1000;
    if (process.env.DB_TIME_QUERY) {
      portNumber = parseFloat(process.env.DB_TIME_QUERY);
    }
    return portNumber;
  }
}
