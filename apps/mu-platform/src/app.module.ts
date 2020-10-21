import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { MuLogger } from '../../../libs/common/src/logging';
import { NotificationModule } from './notification/notification.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, }),
    TypeOrmModule.forRoot({
      autoLoadEntities:true,
      synchronize:false
    }),
    NotificationModule,
  ],
  providers: [AppService, MuLogger],
  exports: [MuLogger],
})
export class AppModule { }
