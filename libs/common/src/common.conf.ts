import { Injectable } from '@nestjs/common'
import { InfluxDB } from 'influx'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class InfluxConfig {
    constructor(private readonly configService: ConfigService){

    }

    get host(): string {
        return process.env.INFLUX_HOST || ''
    }
    get database(): string {
        return process.env.INFLUX_DB || ''
    }
}

export const INFLUX_CLIENT = 'INFLUX_CLIENT'
export const INFLUX_CLIENT_FACTORY = {
    provide: INFLUX_CLIENT,
    useFactory: (config: InfluxConfig) => {
        return new InfluxDB({
            host: config.host,
            database: config.database,
        })
    },
    inject: [InfluxConfig],
}


