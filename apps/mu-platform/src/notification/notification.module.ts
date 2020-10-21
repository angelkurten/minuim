import { CommonModule } from '@mu/mu-common';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import {  NotificationService } from './controller/notification.controller';
import { NotificationFactory } from './infrastructure/notification-factory.factory';
import { TaskEntity } from './db/entity/task.entity';
import { TaskPlaceEntity } from './db/entity/task-place.entity';
import { TaskRepository } from './db/repository/task.repository';

@Module({
  imports: [
    CommonModule,
    ScheduleModule.forRoot(),
    TypeOrmModule.forFeature([
      TaskEntity,
      TaskPlaceEntity,
      TaskRepository
    ])
  ],
  controllers: [NotificationService],
  providers: [
    NotificationFactory,
  ]
})

export class NotificationModule {}
