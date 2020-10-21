import { Injectable, Inject } from '@nestjs/common'
import { INFLUX_CLIENT, InfluxConfig } from './common.conf';
import { InfluxDB } from 'influx';
import { MuLogger } from './logging';
import { config } from 'rxjs';

@Injectable()
export class Chronos {

    private readonly logger = new MuLogger(Chronos.name)
    private active = false;
    private data: ChronoRecord[] = []

    constructor(
        @Inject(INFLUX_CLIENT) private readonly influx: InfluxDB,
        private readonly influxConfig: InfluxConfig) {
        influx.createDatabase(influxConfig.database)
            .then((val) => {
                this.logger.log(`Influx DB [${this.influxConfig.database}] created successfully`)
                this.enable()
            })
            .catch((e) => {
                this.logger.error(`Error creating the influx database [${this.influxConfig.database}]`, e?.message)
            })
        setInterval(this.processRecords, 3000, this)
    }

    enable(): void {
        this.active = true
    }

    disable(): void {
        this.active = false
    }

    record(record: ChronoRecord): void {
        if (this.active) {
            this.data.push(record)
        } else {
            // Ignore record Chronos Disabled
        }
    }

    private processRecords(chronos: Chronos): void {
        if (chronos.active) {
            const influxPoints = chronos.data.map((crecord) => {
                return {
                    measurement: crecord.path,
                    tags: crecord.tags,
                    fields: { ...crecord.fields, status: crecord.statusCode }
                }
            })
            if (influxPoints.length > 0) {
                chronos.influx.writePoints(influxPoints)
                chronos.data = []
            }
        }
    }

}

export interface ChronoRecord {
    correlationId: string,
    path: string,
    statusCode: number,
    value: number,
    tags?: {
        [name: string]: string;
    }
    fields?: {
        // tslint:disable-next-line:no-any
        [name: string]: any;
    }
}
