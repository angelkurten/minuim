
import { Inject, Injectable } from '@nestjs/common';
import { GrpcMethod, GrpcService, RpcException } from '@nestjs/microservices';
import { log } from 'console';
import { TaskRepository } from '../db/repository/task.repository';
import { NotificationFactory } from '../infrastructure/notification-factory.factory';
import { SendNotificationRequest, SendNotificationResponse } from '../notification.api';

@GrpcService()
@Injectable()
export class NotificationService{

    constructor(
        @Inject(NotificationFactory) private readonly notificationFactory: NotificationFactory,
        @Inject(TaskRepository) private readonly taskRepository: TaskRepository
    ){}

    @GrpcMethod()
    async sendNotification(request: SendNotificationRequest): Promise<SendNotificationResponse> {
        const task = await this.taskRepository.findOne(request.taskId)
        const provider = this.notificationFactory.createProvider('default');
        provider.sendNotification(1)
        return {result: false}
    }
}