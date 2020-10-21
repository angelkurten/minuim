import { Module } from '@nestjs/common';
import { Chronos } from './chronos';
import { InfluxConfig, INFLUX_CLIENT_FACTORY } from './common.conf';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [
    InfluxConfig,
    INFLUX_CLIENT_FACTORY,
    Chronos
  ],
  exports: [Chronos],
})
export class CommonModule { }
